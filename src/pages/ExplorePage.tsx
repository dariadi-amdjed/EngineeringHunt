import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, ChevronDown, Loader2 } from 'lucide-react';
import { WebsiteCard } from '@/components/WebsiteCard';
import { FilterBar } from '@/components/FilterBar';
import { SearchBar } from '@/components/SearchBar';
import { EmptyState } from '@/components/EmptyState';
import { FloatingStickers } from '@/components/FloatingStickers';
import { AISearchOverlay } from '@/components/AISearchOverlay';
import { SkeletonCard } from '@/components/SkeletonCard';
import { exploreStickers } from '@/data/stickers';
import { useWebsites } from '@/lib/useWebsites';
import type { SearchFilters } from '@/types';

const PAGE_SIZE = 12;

const defaultFilters: SearchFilters = {
  query: '',
  categories: [],
  purposes: [],
  pricing: [],
  authentication: [],
  difficulty: [],
  interactivity: [],
  openSource: false,
  type: [],
};

export function ExplorePage() {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';

  const [filters, setFilters] = useState<SearchFilters>({
    ...defaultFilters,
    query: initialQuery,
  });
  const [aiQuery, setAiQuery] = useState('');
  const [aiOpen, setAiOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    setFilters((prev) => ({ ...prev, query: initialQuery }));
  }, [initialQuery]);

  const handleAISearch = (query: string) => {
    setAiQuery(query);
    setAiOpen(true);
  };

  const { websites: results, totalCount, loading } = useWebsites({ filters });

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [filters]);

  const visibleResults = results.slice(0, visibleCount);
  const hasMore = visibleCount < results.length;

  const handleLoadMore = useCallback(() => {
    setLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + PAGE_SIZE);
      setLoadingMore(false);
    }, 400);
  }, []);

  return (
    <div className="pb-24">
      {/* AI Search Overlay */}
      <AISearchOverlay
        query={aiQuery}
        isOpen={aiOpen}
        onClose={() => setAiOpen(false)}
      />

      {/* Header */}
      <div className="px-4 pt-6 sm:px-6">
        <div className="relative mb-4 overflow-x-clip overflow-y-visible">
          <FloatingStickers stickers={exploreStickers} />
          <div className="relative z-10">
            <span className="font-mono text-[10px] uppercase tracking-widest text-blue-600">
              [ EXPLORE ]
            </span>
            <h1 className="mt-1 text-[20px] font-bold text-slate-900">Browse all tools</h1>
            <p className="mt-1 text-[13px] text-slate-500">
              {totalCount} tool{totalCount !== 1 ? 's' : ''} across 8 domains
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="mb-4">
          <SearchBar variant="compact" className="max-w-xl" onAISearch={handleAISearch} />
        </div>

        {/* Filter Bar */}
        <div className="mb-2">
          <FilterBar filters={filters} onFilterChange={(f) => setFilters((prev) => ({ ...prev, ...f }))} />
        </div>

        {/* Result count */}
        <div className="mb-4">
          <span className="text-[12px] text-slate-400">
            {loading ? 'Loading...' : `${results.length} result${results.length !== 1 ? 's' : ''}`}
          </span>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="px-4 sm:px-6">
        {loading ? (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={`skeleton-${i}`} />
            ))}
          </div>
        ) : visibleResults.length > 0 ? (
          <>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {visibleResults.map((website) => (
                <WebsiteCard key={website.id} website={website} layout="grid" />
              ))}

              {loadingMore &&
                Array.from({ length: Math.min(PAGE_SIZE, results.length - visibleCount) }).map(
                  (_, i) => <SkeletonCard key={`skeleton-more-${i}`} />
                )}
            </div>

            {hasMore && (
              <div className="flex justify-center py-8">
                <button
                  onClick={handleLoadMore}
                  disabled={loadingMore}
                  className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-2.5 text-[13px] font-medium text-slate-700 transition-colors hover:bg-slate-50 disabled:opacity-60 cursor-pointer"
                >
                  {loadingMore ? (
                    <>
                      <Loader2 className="h-3.5 w-3.5 animate-ai-spin" />
                      Loading tools...
                    </>
                  ) : (
                    <>
                      Load More Tools
                      <ChevronDown className="h-3.5 w-3.5" />
                    </>
                  )}
                </button>
              </div>
            )}
          </>
        ) : (
          <EmptyState
            icon={<Search className="h-6 w-6" />}
            title="No tools found"
            description="Try adjusting your filters or search query."
          />
        )}
      </div>
    </div>
  );
}
