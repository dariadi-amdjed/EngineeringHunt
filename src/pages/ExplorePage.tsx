import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, Grid3X3, List, Search } from 'lucide-react';
import { WebsiteCard } from '@/components/WebsiteCard';
import { FilterSidebar } from '@/components/FilterSidebar';
import { SearchBar } from '@/components/SearchBar';
import { EmptyState } from '@/components/EmptyState';
import { FloatingStickers } from '@/components/FloatingStickers';
import { AISearchOverlay } from '@/components/AISearchOverlay';
import { exploreStickers } from '@/data/stickers';
import { websites, filterWebsites, searchWebsites } from '@/data/websites';
import type { SearchFilters, SortOption } from '@/types';

const defaultFilters: SearchFilters = {
  query: '',
  categories: [],
  purposes: [],
  pricing: [],
  authentication: [],
  difficulty: [],
  interactivity: [],
  openSource: false,
};

export function ExplorePage() {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';

  const [filters, setFilters] = useState<SearchFilters>({
    ...defaultFilters,
    query: initialQuery,
  });
  const [sortBy, setSortBy] = useState<SortOption>('relevance');
  const [layout, setLayout] = useState<'grid' | 'list'>('grid');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [aiQuery, setAiQuery] = useState('');
  const [aiOpen, setAiOpen] = useState(false);

  useEffect(() => {
    setFilters((prev) => ({ ...prev, query: initialQuery }));
  }, [initialQuery]);

  const handleAISearch = (query: string) => {
    setAiQuery(query);
    setAiOpen(true);
  };

  const results = useMemo(() => {
    const hasActiveFilters =
      filters.purposes.length > 0 ||
      filters.pricing.length > 0 ||
      filters.difficulty.length > 0 ||
      filters.categories.length > 0 ||
      filters.openSource;

    if (filters.query) {
      return searchWebsites(filters.query);
    }
    if (hasActiveFilters) {
      return filterWebsites(filters, sortBy);
    }
    return filterWebsites({}, sortBy);
  }, [filters, sortBy]);

  return (
    <div className="h-[calc(100vh-56px)] flex flex-col">
      {/* AI Search Overlay */}
      <AISearchOverlay
        query={aiQuery}
        isOpen={aiOpen}
        onClose={() => setAiOpen(false)}
      />

      {/* Fixed Header Area */}
      <div className="flex-shrink-0 px-4 pt-6 sm:px-6">
        {/* Header */}
        <div className="relative mb-4 overflow-hidden">
          <FloatingStickers stickers={exploreStickers} />
          <div className="relative z-10">
            <span className="font-mono text-[10px] uppercase tracking-widest text-blue-600">
              [ EXPLORE ]
            </span>
            <h1 className="mt-1 text-[20px] font-bold text-slate-900">Browse all tools</h1>
            <p className="mt-1 text-[13px] text-slate-500">
              {websites.length} tools across {new Set(websites.map((w) => w.category)).size} domains
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="mb-4">
          <SearchBar variant="compact" className="max-w-xl" onAISearch={handleAISearch} />
        </div>

        {/* Toolbar */}
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-[12px] font-medium text-slate-600 transition-colors hover:bg-slate-50 lg:hidden cursor-pointer"
            >
              <SlidersHorizontal className="h-3.5 w-3.5" />
              Filters
            </button>
            <span className="text-[12px] text-slate-400">
              {results.length} result{results.length !== 1 ? 's' : ''}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setLayout('grid')}
              className={`flex h-8 w-8 items-center justify-center rounded-md transition-colors cursor-pointer ${
                layout === 'grid' ? 'bg-slate-100 text-slate-900' : 'text-slate-400 hover:bg-slate-50'
              }`}
            >
              <Grid3X3 className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={() => setLayout('list')}
              className={`flex h-8 w-8 items-center justify-center rounded-md transition-colors cursor-pointer ${
                layout === 'list' ? 'bg-slate-100 text-slate-900' : 'text-slate-400 hover:bg-slate-50'
              }`}
            >
              <List className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Dual-scroll content area */}
      <div className="flex min-h-0 flex-1 gap-6 px-4 sm:px-6">
        {/* Left Sidebar - independent scroll */}
        <div className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-20 h-[calc(100vh-80px)] overflow-y-auto rounded-xl border border-slate-200 bg-white p-4">
            <FilterSidebar
              filters={filters}
              sortBy={sortBy}
              onFilterChange={(f) => setFilters((prev) => ({ ...prev, ...f }))}
              onSortChange={setSortBy}
              contentOnly
            />
          </div>
        </div>

        {/* Mobile sidebar (overlay) */}
        <FilterSidebar
          filters={filters}
          sortBy={sortBy}
          onFilterChange={(f) => setFilters((prev) => ({ ...prev, ...f }))}
          onSortChange={setSortBy}
          isMobileOpen={mobileFiltersOpen}
          onMobileClose={() => setMobileFiltersOpen(false)}
        />

        {/* Right Pane - independent scroll */}
        <div className="flex-1 overflow-y-auto pb-6" style={{ height: 'calc(100vh - 80px)' }}>
          {results.length > 0 ? (
            <div
              className={
                layout === 'grid'
                  ? 'grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3'
                  : 'flex flex-col gap-2'
              }
            >
              {results.map((website) => (
                <WebsiteCard
                  key={website.slug}
                  website={website}
                  layout={layout}
                />
              ))}
            </div>
          ) : (
            <EmptyState
              icon={<Search className="h-6 w-6" />}
              title="No tools found"
              description="Try adjusting your filters or search query."
            />
          )}
        </div>
      </div>
    </div>
  );
}
