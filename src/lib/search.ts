import type { Website } from '@/types';
import { categories } from '@/data/categories';

// ── Deterministic relevance-ranking search ─────────────────────────
// Scores every tool against the query using weighted field matching:
// name > tags > category/topics > purpose > metadata > description,
// with phrase bonuses, IDF weighting for rare terms, and a coverage
// bonus so tools matching many query terms outrank single-term hits.

export interface RankedWebsite {
  website: Website;
  score: number;
  matchedTokens: string[];
  strong: boolean;
  hitFields: Map<string, string[]>;
}

interface ToolIndex {
  website: Website;
  nameLower: string;
  nameWords: string[];
  descLower: string;
  longDescLower: string;
  tagTextLower: string;
  tagWords: string[];
  categoryTextLower: string;
  categoryWords: string[];
  topicWords: string[];
  purposeTextLower: string;
  metaTextLower: string;
}

const STOPWORDS = new Set([
  'a', 'an', 'the', 'for', 'and', 'or', 'of', 'to', 'in', 'on', 'by', 'with',
  'best', 'good', 'top', 'tool', 'tools', 'app', 'apps', 'software',
  'online', 'website', 'websites', 'site', 'sites', 'resource', 'resources',
]);

// Deterministic vocabulary expansion derived from the directory's own
// domain names, topics, and tags. Synonym matches score at half weight.
const SYNONYMS: Record<string, string[]> = {
  robot: ['robotics'],
  robots: ['robot', 'robotics'],
  robotics: ['robot'],
  sim: ['simulation', 'simulator'],
  simulate: ['simulation'],
  simulation: ['simulator'],
  simulator: ['simulation'],
  autonomous: ['autonomy', 'navigation'],
  auton: ['autonomous', 'navigation'],
  autonomy: ['autonomous'],
  route: ['path', 'planning', 'navigation'],
  path: ['route', 'planning'],
  planner: ['planning'],
  planning: ['planner'],
  dev: ['development'],
  development: ['ide', 'framework'],
  firmware: ['embedded', 'microcontroller'],
  embedded: ['microcontroller', 'firmware', 'iot'],
  iot: ['embedded'],
  mcu: ['microcontroller'],
  microcontroller: ['mcu', 'embedded'],
  pcb: ['layout', 'schematic', 'eda'],
  schematic: ['pcb', 'schematics'],
  schematics: ['schematic'],
  eda: ['pcb'],
  verilog: ['hdl'],
  vhdl: ['hdl'],
  hdl: ['verilog', 'vhdl'],
  fpga: ['synthesis', 'hdl'],
  chip: ['chips', 'asic', 'silicon'],
  chips: ['chip'],
  cpu: ['architecture'],
  circuit: ['circuits'],
  circuits: ['circuit'],
  learn: ['education', 'learning'],
  learning: ['education', 'learn'],
  educational: ['education', 'learning'],
  education: ['learning'],
  beginner: ['beginners', 'fundamentals'],
  beginners: ['beginner'],
  practice: ['problems', 'exercises'],
  calculator: ['calculators'],
  calculators: ['calculator'],
  datasheet: ['datasheets'],
  datasheets: ['datasheet'],
  docs: ['documentation', 'reference'],
  documentation: ['docs'],
  reference: ['documentation'],
  browser: ['web'],
  web: ['browser'],
  free: [],
};

function normalize(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
}

function words(text: string): string[] {
  return normalize(text).split(' ').filter(Boolean);
}

const FIELD_WEIGHTS = {
  nameWord: 30,
  namePart: 16,
  tagWord: 20,
  tagPart: 10,
  categoryWord: 14,
  categoryPart: 7,
  purposeWord: 12,
  purposePart: 6,
  descWord: 7,
  descPart: 3,
  longDescWord: 4,
  longDescPart: 2,
  metaWord: 8,
};

const PHRASE_BONUS = {
  nameExact: 120,
  nameContains: 70,
  tagOrCategory: 45,
  description: 25,
};

export const STRONG_MATCH_THRESHOLD = 55;

function buildToolIndex(website: Website): ToolIndex {
  const category = categories.find((c) => c.slug === website.category);
  return {
    website,
    nameLower: website.name.toLowerCase(),
    nameWords: words(website.name),
    descLower: website.description.toLowerCase(),
    longDescLower: website.longDescription.toLowerCase(),
    tagTextLower: website.tags.map((t) => t.toLowerCase()).join(' | '),
    tagWords: website.tags.flatMap((t) => words(t)),
    categoryTextLower: [
      website.category.replace(/-/g, ' '),
      category ? category.name : '',
      category ? category.topics.join(' ') : '',
    ]
      .join(' ')
      .toLowerCase(),
    categoryWords: [
      ...words(website.category.replace(/-/g, ' ')),
      ...(category ? category.name.split(/\s+/).map((w) => w.toLowerCase()) : []),
      ...(category ? category.topics.flatMap((t) => words(t)) : []),
    ],
    topicWords: category ? category.topics.flatMap((t) => words(t)) : [],
    purposeTextLower: website.purposes.map((p) => p.replace(/-/g, ' ')).join(' ').toLowerCase(),
    metaTextLower: [
      website.pricing,
      website.authentication.replace(/-/g, ' '),
      website.type.replace(/-/g, ' '),
      website.platform.join(' '),
      website.difficulty.join(' '),
      website.interactivity.replace(/-/g, ' '),
      isFlaggedOpenSource(website) ? 'open source' : '',
    ]
      .join(' ')
      .toLowerCase(),
  };
}

function isFlaggedOpenSource(w: Website): boolean {
  return w.openSource === true || Boolean(w.githubUrl);
}

interface FieldHit {
  score: number;
  field: string;
  term?: string;
}

// Words too generic to signal a domain on their own (used for intent
// chips only; they still contribute to normal scoring).
const GENERIC_INTENT_WORDS = new Set([
  'design', 'systems', 'system', 'reference', 'technical',
]);

function matchToken(index: ToolIndex, term: string): FieldHit | null {
  const t = term.toLowerCase();
  if (!t) return null;

  // Word-boundary exact matches score highest per field.
  if (index.nameWords.includes(t))
    return { score: FIELD_WEIGHTS.nameWord, field: 'name', term: t };
  if (index.tagWords.includes(t))
    return { score: FIELD_WEIGHTS.tagWord, field: 'tag', term: t };
  if (index.topicWords.includes(t) || index.nameLower === t)
    return { score: FIELD_WEIGHTS.categoryWord, field: 'domain', term: t };
  if (index.categoryWords.includes(t))
    return { score: FIELD_WEIGHTS.categoryWord, field: 'domain', term: t };
  if (words(index.purposeTextLower).includes(t))
    return { score: FIELD_WEIGHTS.purposeWord, field: 'purpose', term: t };
  if (words(index.metaTextLower).includes(t))
    return { score: FIELD_WEIGHTS.metaWord, field: 'metadata', term: t };
  if (index.descLower.includes(t))
    return { score: FIELD_WEIGHTS.descWord, field: 'description', term: t };
  if (index.longDescLower.includes(t))
    return { score: FIELD_WEIGHTS.longDescWord, field: 'description', term: t };

  // Substring fallback only for longer tokens to avoid noise.
  if (t.length >= 4) {
    if (index.nameLower.includes(t))
      return { score: FIELD_WEIGHTS.namePart, field: 'name', term: t };
    if (index.tagTextLower.includes(t))
      return { score: FIELD_WEIGHTS.tagPart, field: 'tag', term: t };
    if (index.categoryTextLower.includes(t))
      return { score: FIELD_WEIGHTS.categoryPart, field: 'domain', term: t };
    if (index.descLower.includes(t)) return { score: FIELD_WEIGHTS.descPart, field: 'description' };
    if (index.longDescLower.includes(t))
      return { score: FIELD_WEIGHTS.longDescPart, field: 'description' };
  }

  return null;
}

/**
 * Rank tools in `pool` against `query`.
 * Deterministic: no network calls, no AI, no randomness.
 */
export function rankWebsites(query: string, pool: Website[]): RankedWebsite[] {
  const phrase = normalize(query);
  if (!phrase) return [];

  const rawTokens = Array.from(new Set(words(query))).filter(
    (t) => t.length >= 2 && !STOPWORDS.has(t)
  );
  if (rawTokens.length === 0 && !phrase) return [];

  const indexes = pool.map(buildToolIndex);

  // IDF-style weight: rare terms across the directory count more than
  // generic ones, so "vex" or "esp32" dominate over "design".
  const idf = new Map<string, number>();
  for (const token of rawTokens) {
    const df = indexes.filter((idx) => matchToken(idx, token) !== null).length;
    idf.set(token, df > 0 ? 1 + Math.log(pool.length / df) : 1 + Math.log(pool.length));
  }

  const scored = indexes.map((index) => {
    let score = 0;
    const matchedTokens: string[] = [];
    const hitFields = new Map<string, string[]>();

    // Full-phrase bonuses.
    const nameHit =
      index.nameLower === phrase
        ? PHRASE_BONUS.nameExact
        : index.nameLower.includes(phrase)
          ? PHRASE_BONUS.nameContains
          : 0;
    if (nameHit > 0) {
      score += nameHit;
      addHit(hitFields, 'name', index.website.name);
    }
    const tagPhrase =
      index.tagTextLower.includes(phrase) || index.categoryTextLower.includes(phrase);
    if (!nameHit && phrase.length > 2 && tagPhrase) {
      score += PHRASE_BONUS.tagOrCategory;
      addHit(hitFields, 'tags/domain', index.website.tags.slice(0, 2).join(', '));
    }
    if (phrase.length > 2 && index.descLower.includes(phrase)) {
      score += PHRASE_BONUS.description;
      addHit(hitFields, 'description', index.website.description);
    }

    // Per-token scoring with synonym expansion at half weight.
    for (const token of rawTokens) {
      let hit = matchToken(index, token);
      let weight = idf.get(token)!;

      if (!hit) {
        for (const syn of SYNONYMS[token] ?? []) {
          const synHit = matchToken(index, syn);
          if (synHit) {
            hit = synHit;
            weight *= 0.5;
            break;
          }
        }
      }

      if (hit) {
        score += hit.score * weight * (hit.field === 'description' ? 0.6 : 1);
        matchedTokens.push(token);
        addHit(hitFields, hit.field, describeField(index, hit.field, hit.term ?? token));
      }
    }

    // Coverage bonus: reward tools that satisfy many query terms so a
    // multi-term match always outranks a single generic-word match.
    const total = rawTokens.length;
    const matchedCount = matchedTokens.length;
    if (total > 1 && matchedCount > 1) {
      score += 40 * ((matchedCount * matchedCount) / (total * total));
    }

    const hasNameOrPhraseHit = nameHit > 0 || tagPhrase;
    const strong =
      score >= STRONG_MATCH_THRESHOLD && (matchedCount >= 2 || hasNameOrPhraseHit);

    return { website: index.website, score, matchedTokens, strong, hitFields };
  });

  // Confident (strong) matches always outrank weak single-term hits,
  // even when a generic match happens to accumulate a higher raw score.
  return scored
    .filter((entry) => entry.score > 0)
    .sort(
      (a, b) =>
        Number(b.strong) - Number(a.strong) ||
        b.score - a.score ||
        a.website.name.localeCompare(b.website.name)
    )
    .map(({ website, score, matchedTokens, strong, hitFields }) => ({
      website,
      score: Math.round(score),
      matchedTokens,
      strong,
      hitFields,
    }));
}

function addHit(map: Map<string, string[]>, field: string, detail: string): void {
  const list = map.get(field) ?? [];
  if (list.length < 2) list.push(detail);
  map.set(field, list);
}

function describeField(index: ToolIndex, field: string, token: string): string {
  switch (field) {
    case 'name':
      return index.website.name;
    case 'tag':
      return (
        index.website.tags.find((t) => words(t).includes(token) || t.toLowerCase().includes(token)) ??
        token
      );
    default:
      return token;
  }
}

const CATEGORY_INTENT_WORDS: Record<string, string[]> = Object.fromEntries(
  categories.map((c) => [
    c.slug,
    [...words(c.name), ...c.topics.flatMap((t) => words(t)).map((w) => w.toLowerCase())],
  ])
);

/** Human-readable chips describing what the engine detected in the query. */
export function interpretQuery(query: string): { label: string; tags: string[] }[] {
  const tokens = Array.from(new Set(words(query))).filter(
    (t) => t.length >= 2 && !STOPWORDS.has(t)
  );
  if (tokens.length === 0) return [];

  const chips: { label: string; tags: string[] }[] = [];

  for (const [slug, vocab] of Object.entries(CATEGORY_INTENT_WORDS)) {
    if (tokens.some((t) => !GENERIC_INTENT_WORDS.has(t) && vocab.includes(t))) {
      const category = categories.find((c) => c.slug === slug);
      if (category) chips.push({ label: category.name, tags: [category.slug] });
    }
  }

  const intentLabels: Record<string, string> = {
    simulate: 'Simulation',
    simulation: 'Simulation',
    simulator: 'Simulation',
    development: 'Development',
    ide: 'Development',
    framework: 'Development',
    learn: 'Learning',
    learning: 'Learning',
    practice: 'Practice',
    calculator: 'Calculators',
    datasheet: 'Datasheets',
    reference: 'Reference',
    documentation: 'Docs',
  };
  for (const token of tokens) {
    const label = intentLabels[token];
    if (label && !chips.some((c) => c.label === label)) {
      chips.push({ label, tags: [token] });
    }
  }

  if (tokens.includes('free')) chips.push({ label: 'Free', tags: ['free'] });
  if (tokens.some((t) => SYNONYMS[t]?.includes('web') || t === 'browser'))
    chips.push({ label: 'Web-based', tags: ['web'] });

  return chips.slice(0, 4);
}

const FIELD_LABELS: Record<string, string> = {
  name: 'name',
  tag: 'tags',
  domain: 'domain',
  purpose: 'purpose',
  metadata: 'attributes',
  description: 'description',
};

/** Build an honest, data-backed explanation of why a tool ranked where it did. */
export function describeMatch(entry: RankedWebsite): string {
  const parts: string[] = [];

  const ordered = ['name', 'tag', 'domain', 'purpose', 'metadata', 'description'];
  for (const field of ordered) {
    const details = entry.hitFields.get(field);
    if (!details || details.length === 0) continue;
    const label = FIELD_LABELS[field];
    const unique = Array.from(new Set(details)).slice(0, 2);
    if (field === 'name') {
      parts.push(`Name match: ${unique[0]}`);
    } else if (field === 'domain') {
      parts.push(`${entry.website.category.replace(/-/g, ' ')} domain`);
    } else {
      parts.push(`${label}: ${unique.join(', ')}`);
    }
    if (parts.length >= 3) break;
  }

  return parts.length > 0
    ? `Ranked by relevance — matched on ${parts.join(' · ')}.`
    : 'Ranked by keyword relevance against tool names, tags, domains, and descriptions.';
}
