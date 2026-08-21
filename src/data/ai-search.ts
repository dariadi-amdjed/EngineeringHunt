import type { AISearchResult } from '@/types';
import { websites } from './websites';
import {
  rankWebsites,
  interpretQuery,
  describeMatch,
} from '@/lib/search';

/**
 * Deterministic relevance search over the local directory.
 * No external AI/API involved: queries are tokenized and scored against
 * each tool's name, tags, domain, purpose, metadata, and descriptions.
 */
export function aiSearch(query: string): AISearchResult | null {
  if (!query.trim()) return null;

  const ranked = rankWebsites(query, websites);
  if (ranked.length === 0) return null;

  const [best, ...rest] = ranked;

  return {
    query,
    interpretedTags: interpretQuery(query),
    bestMatch: best.website,
    matchReason: describeMatch(best),
    otherResults: rest.slice(0, 5).map((r) => r.website),
    weakMatch: !best.strong,
  };
}
