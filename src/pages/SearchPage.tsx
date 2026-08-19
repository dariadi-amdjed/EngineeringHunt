import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X } from 'lucide-react';
import { SearchBar } from '@/components/SearchBar';
import { WebsiteCard } from '@/components/WebsiteCard';
import { FilterSidebar } from '@/components/FilterSidebar';
import { EmptyState } from '@/components/EmptyState';
import { websites } from '@/data/websites';
import type { SearchFilters } from '@/types';

export function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('q') || '';

  const [filters, setFilters] = useState<SearchFilters>({
    query: queryParam,
    categories: [],
    contentTypes: [],
    difficulty: [],
    platforms: [],
  });

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    setFilters((prev) => ({ ...prev, query: queryParam }));
  }, [queryParam]);

  const results = useMemo(() => {
    let filtered = [...websites];

    const q = filters.query.toLowerCase();
    if (q) {
      filtered = filtered.filter(
        (w) =>
          w.name.toLowerCase().includes(q) ||
          w.description.toLowerCase().includes(q) ||
          w.topics.some((t) => t.toLowerCase().includes(q)) ||
          w.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    if (filters.categories.length > 0) {
      filtered = filtered.filter((w) =>
        filters.categories.some((c) => w.categories.includes(c))
      );
    }

    if (filters.contentTypes.length > 0) {
      filtered = filtered.filter((w) =>
        w.contentTypes.some((ct) => filters.contentTypes.includes(ct))
      );
    }

    if (filters.difficulty.length > 0) {
      filtered = filtered.filter((w) =>
        w.difficulty.some((d) => filters.difficulty.includes(d))
      );
    }

    return filtered;
  }, [filters]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      {/* Search header */}
      <div className="mb-6">
        <div className="mx-auto max-w-2xl">
          <SearchBar defaultValue={queryParam} autoFocus={!queryParam} size="large" />
        </div>
        <div className="mt-3 flex items-center justify-between">
          <p className="text-[13px] text-slate-500">
            <span className="font-medium text-slate-700">{results.length}</span> results
            {filters.query && (
              <>
                {' '}
                for{' '}
                <span className="font-medium text-slate-700">"{filters.query}"</span>
              </>
            )}
          </p>
          <button
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
            className="flex items-center gap-1.5 rounded-md border border-slate-200 px-3 py-1.5 text-[12px] font-medium text-slate-500 transition-colors hover:bg-slate-50 md:hidden"
          >
            <SlidersHorizontal className="h-3.5 w-3.5" />
            Filters
          </button>
        </div>
      </div>

      <div className="flex gap-8">
        {/* Desktop sidebar */}
        <div className="hidden w-56 flex-shrink-0 md:block">
          <div className="sticky top-20">
            <FilterSidebar filters={filters} onFilterChange={setFilters} />
          </div>
        </div>

        {/* Mobile filters drawer */}
        {mobileFiltersOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            <div
              className="absolute inset-0 bg-slate-900/20"
              onClick={() => setMobileFiltersOpen(false)}
            />
            <div className="absolute bottom-0 left-0 right-0 max-h-[70vh] overflow-y-auto rounded-t-xl bg-white p-4">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-[14px] font-semibold text-slate-900">Filters</h3>
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="rounded p-1 text-slate-400 hover:text-slate-600"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <FilterSidebar filters={filters} onFilterChange={setFilters} />
            </div>
          </div>
        )}

        {/* Results */}
        <div className="flex-1">
          {results.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
              {results.map((site) => (
                <WebsiteCard key={site.id} website={site} showRelevance={!!filters.query} relevance={filters.query ? 'Excellent match' : undefined} />
              ))}
            </div>
          ) : (
            <EmptyState query={filters.query} />
          )}
        </div>
      </div>
    </div>
  );
}
