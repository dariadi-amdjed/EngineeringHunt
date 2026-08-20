import { useState, useEffect } from 'react';
import { websites as localWebsites } from '@/data/websites';
import { categories } from '@/data/categories';
import type { Website, SearchFilters, CategorySlug } from '@/types';

// ── Filtering ──────────────────────────────────────────────────────

function applyFilters(
  data: Website[],
  filters: Partial<SearchFilters>
): Website[] {
  let result = [...data];

  if (filters.query) {
    const q = filters.query.toLowerCase();
    result = result.filter(
      (w) =>
        w.name.toLowerCase().includes(q) ||
        w.description.toLowerCase().includes(q) ||
        w.tags.some((t) => t.toLowerCase().includes(q)) ||
        w.category.replace(/-/g, ' ').includes(q)
    );
  }

  if (filters.categories && filters.categories.length > 0) {
    result = result.filter((w) => filters.categories!.includes(w.category));
  }
  if (filters.purposes && filters.purposes.length > 0) {
    result = result.filter((w) => w.purposes.some((p) => filters.purposes!.includes(p)));
  }
  if (filters.pricing && filters.pricing.length > 0) {
    result = result.filter((w) => filters.pricing!.includes(w.pricing));
  }
  if (filters.authentication && filters.authentication.length > 0) {
    result = result.filter((w) => filters.authentication!.includes(w.authentication));
  }
  if (filters.difficulty && filters.difficulty.length > 0) {
    result = result.filter((w) => w.difficulty.some((d) => filters.difficulty!.includes(d)));
  }
  if (filters.interactivity && filters.interactivity.length > 0) {
    result = result.filter((w) => filters.interactivity!.includes(w.interactivity));
  }
  if (filters.openSource) {
    result = result.filter((w) => w.openSource);
  }

  return result;
}

// ── Pure functions ─────────────────────────────────────────────────

export function getAllWebsites(): Website[] {
  return localWebsites;
}

export function getWebsiteBySlug(slug: string): Website | undefined {
  return localWebsites.find((w) => w.slug === slug);
}

export function getWebsitesByDomain(domain: string): Website[] {
  return localWebsites.filter((w) => w.category === domain);
}

export function getFeaturedWebsites(limit?: number): Website[] {
  const featured = localWebsites.filter((w) => w.featured);
  return limit ? featured.slice(0, limit) : featured;
}

// ── Category Counts ────────────────────────────────────────────────

export function getCategoryCounts(): Record<CategorySlug, number> {
  const counts: Record<string, number> = {};
  categories.forEach((c) => { counts[c.slug] = 0; });
  localWebsites.forEach((w) => {
    if (counts[w.category] !== undefined) counts[w.category]++;
  });
  return counts as Record<CategorySlug, number>;
}

// ── React Hook (for ExplorePage compatibility) ─────────────────────

interface UseWebsitesOptions {
  filters?: Partial<SearchFilters>;
  featured?: boolean;
  limit?: number;
}

interface UseWebsitesResult {
  websites: Website[];
  totalCount: number;
  loading: boolean;
  error: string | null;
}

export function useWebsites(options: UseWebsitesOptions = {}): UseWebsitesResult {
  const { filters, featured, limit } = options;
  const [websites, setWebsites] = useState<Website[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const filterKey = JSON.stringify({
    q: filters?.query || '',
    c: filters?.categories || [],
    p: filters?.purposes || [],
    pr: filters?.pricing || [],
    a: filters?.authentication || [],
    d: filters?.difficulty || [],
    i: filters?.interactivity || [],
    o: filters?.openSource || false,
    f: featured || false,
    l: limit || 0,
  });

  useEffect(() => {
    let data = localWebsites;
    if (featured) data = data.filter((w) => w.featured);
    if (filters) data = applyFilters(data, filters);
    if (limit) data = data.slice(0, limit);
    setWebsites(data);
    setTotalCount(data.length);
    setLoading(false);
  }, [filterKey]);

  return { websites, totalCount, loading, error: null };
}
