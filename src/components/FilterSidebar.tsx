import type { SearchFilters } from '@/types';

type FilterSidebarProps = {
  filters: SearchFilters;
  onFilterChange: (filters: SearchFilters) => void;
};

export function FilterSidebar({ filters, onFilterChange }: FilterSidebarProps) {
  const categories = [
    { value: 'embedded-systems' as const, label: 'Embedded Systems' },
    { value: 'electronics' as const, label: 'Electronics' },
    { value: 'robotics' as const, label: 'Robotics' },
  ];

  const contentTypes = [
    { value: 'projects' as const, label: 'Projects' },
    { value: 'tutorials' as const, label: 'Tutorials' },
    { value: 'documentation' as const, label: 'Documentation' },
    { value: 'tools' as const, label: 'Tools' },
    { value: 'learning' as const, label: 'Learning' },
  ];

  const difficulties = [
    { value: 'beginner' as const, label: 'Beginner' },
    { value: 'intermediate' as const, label: 'Intermediate' },
    { value: 'advanced' as const, label: 'Advanced' },
  ];

  function toggleFilter<K extends keyof SearchFilters>(
    key: K,
    value: SearchFilters[K] extends (infer U)[] ? U : never
  ) {
    const current = filters[key];
    if (Array.isArray(current)) {
      const next = current.includes(value as never)
        ? (current.filter((v) => v !== value) as SearchFilters[K])
        : ([...current, value] as SearchFilters[K]);
      onFilterChange({ ...filters, [key]: next });
    }
  }

  return (
    <aside className="space-y-6">
      <div>
        <h3 className="mb-2 text-[13px] font-semibold text-slate-900">Category</h3>
        <div className="space-y-1">
          {categories.map((cat) => (
            <label
              key={cat.value}
              className="flex cursor-pointer items-center gap-2 rounded px-2 py-1 text-[13px] text-slate-600 transition-colors hover:bg-slate-50"
            >
              <input
                type="checkbox"
                checked={filters.categories.includes(cat.value)}
                onChange={() => toggleFilter('categories', cat.value)}
                className="h-3.5 w-3.5 rounded border-slate-300 text-slate-900 focus:ring-slate-500"
              />
              {cat.label}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-2 text-[13px] font-semibold text-slate-900">Content</h3>
        <div className="space-y-1">
          {contentTypes.map((ct) => (
            <label
              key={ct.value}
              className="flex cursor-pointer items-center gap-2 rounded px-2 py-1 text-[13px] text-slate-600 transition-colors hover:bg-slate-50"
            >
              <input
                type="checkbox"
                checked={filters.contentTypes.includes(ct.value)}
                onChange={() => toggleFilter('contentTypes', ct.value)}
                className="h-3.5 w-3.5 rounded border-slate-300 text-slate-900 focus:ring-slate-500"
              />
              {ct.label}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-2 text-[13px] font-semibold text-slate-900">Difficulty</h3>
        <div className="space-y-1">
          {difficulties.map((d) => (
            <label
              key={d.value}
              className="flex cursor-pointer items-center gap-2 rounded px-2 py-1 text-[13px] text-slate-600 transition-colors hover:bg-slate-50"
            >
              <input
                type="checkbox"
                checked={filters.difficulty.includes(d.value)}
                onChange={() => toggleFilter('difficulty', d.value)}
                className="h-3.5 w-3.5 rounded border-slate-300 text-slate-900 focus:ring-slate-500"
              />
              {d.label}
            </label>
          ))}
        </div>
      </div>

      {(filters.categories.length > 0 ||
        filters.contentTypes.length > 0 ||
        filters.difficulty.length > 0) && (
        <button
          onClick={() =>
            onFilterChange({
              ...filters,
              categories: [],
              contentTypes: [],
              difficulty: [],
              platforms: [],
            })
          }
          className="w-full rounded-md border border-slate-200 py-1.5 text-[12px] font-medium text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-700"
        >
          Clear all filters
        </button>
      )}
    </aside>
  );
}
