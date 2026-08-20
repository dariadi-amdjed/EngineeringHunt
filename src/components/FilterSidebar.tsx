import { ChevronDown, ChevronRight } from 'lucide-react';
import { useState, useCallback } from 'react';
import type { SearchFilters, SortOption, Purpose, Pricing, Authentication, Difficulty, Interactivity } from '@/types';
import { categories } from '@/data/categories';

interface FilterSidebarProps {
  filters: SearchFilters;
  sortBy: SortOption;
  onFilterChange: (filters: Partial<SearchFilters>) => void;
  onSortChange: (sort: SortOption) => void;
  isMobileOpen?: boolean;
  onMobileClose?: () => void;
}

const purposeLabels: Record<Purpose, string> = {
  'simulator': 'Simulator',
  'eda-tool': 'EDA Tool',
  'calculator': 'Calculator',
  'datasheet-reference': 'Datasheet / Reference',
  'community-docs': 'Community & Docs',
};

const pricingLabels: Record<Pricing, string> = {
  'free': 'Free',
  'open-source': 'Open Source',
  'freemium': 'Freemium',
  'paid': 'Paid',
};

const authLabels: Record<Authentication, string> = {
  'no-account': 'No Account Needed',
  'optional-signup': 'Optional Sign-up',
  'signup-required': 'Sign-up Required',
};

const difficultyLabels: Record<Difficulty, string> = {
  'beginner': 'Beginner / Student',
  'intermediate': 'Intermediate Engineer',
  'advanced': 'Expert / Pro',
};

const interactivityLabels: Record<Interactivity, string> = {
  'interactive-canvas': 'Interactive / Live Canvas',
  'input-output-tool': 'Input / Output Tool',
  'static-document': 'Static Document',
};

const purposes: Purpose[] = ['simulator', 'eda-tool', 'calculator', 'datasheet-reference', 'community-docs'];
const pricing: Pricing[] = ['free', 'open-source', 'freemium', 'paid'];
const authentications: Authentication[] = ['no-account', 'optional-signup', 'signup-required'];
const difficulties: Difficulty[] = ['beginner', 'intermediate', 'advanced'];
const interactivities: Interactivity[] = ['interactive-canvas', 'input-output-tool', 'static-document'];

const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'relevance', label: 'Relevance' },
  { value: 'popular', label: 'Most Popular' },
  { value: 'recent', label: 'Recent' },
  { value: 'free-first', label: 'Free First' },
  { value: 'open-source-first', label: 'Open Source First' },
];

interface CollapsibleSectionProps {
  title: string;
  count?: number;
  defaultOpen?: boolean;
  children: React.ReactNode;
}

function CollapsibleSection({ title, count, defaultOpen = false, children }: CollapsibleSectionProps) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-slate-100 py-3">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between text-left cursor-pointer"
      >
        <span className="flex items-center gap-2">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
            {title}
          </span>
          {count !== undefined && count > 0 && (
            <span className="flex h-4 min-w-4 items-center justify-center rounded bg-blue-100 px-1 font-mono text-[9px] text-blue-700">
              {count}
            </span>
          )}
        </span>
        {open ? (
          <ChevronDown className="h-3 w-3 text-slate-400" />
        ) : (
          <ChevronRight className="h-3 w-3 text-slate-400" />
        )}
      </button>
      {open && <div className="mt-2 space-y-1">{children}</div>}
    </div>
  );
}

function CheckboxItem({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-2 rounded px-2 py-1 text-[12px] text-slate-600 transition-colors hover:bg-slate-50">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-3.5 w-3.5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
      />
      {label}
    </label>
  );
}

export function FilterSidebar({
  filters,
  sortBy,
  onFilterChange,
  onSortChange,
  isMobileOpen = false,
  onMobileClose,
}: FilterSidebarProps) {
  const toggleFilter = useCallback(
    <K extends keyof SearchFilters>(key: K, value: SearchFilters[K] extends (infer U)[] ? U : never) => {
      const current = filters[key] as unknown[];
      const next = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      onFilterChange({ [key]: next });
    },
    [filters, onFilterChange]
  );

  const activeFilterCount =
    filters.categories.length +
    filters.purposes.length +
    filters.pricing.length +
    filters.authentication.length +
    filters.difficulty.length +
    filters.interactivity.length +
    (filters.openSource ? 1 : 0);

  const sidebarContent = (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-3">
        <span className="text-[12px] font-semibold text-slate-900">Filters</span>
        {activeFilterCount > 0 && (
          <button
            onClick={() =>
              onFilterChange({
                query: filters.query,
                categories: [],
                purposes: [],
                pricing: [],
                authentication: [],
                difficulty: [],
                interactivity: [],
                openSource: false,
              })
            }
            className="text-[11px] text-blue-600 hover:text-blue-700 cursor-pointer"
          >
            Clear all ({activeFilterCount})
          </button>
        )}
      </div>

      {/* Quick toggle */}
      <div className="border-b border-slate-100 py-3">
        <label className="flex cursor-pointer items-center gap-2 rounded px-2 py-1.5 text-[12px] font-medium text-slate-700 transition-colors hover:bg-slate-50">
          <input
            type="checkbox"
            checked={filters.openSource}
            onChange={() => onFilterChange({ openSource: !filters.openSource })}
            className="h-3.5 w-3.5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
          />
          Open source only
        </label>
      </div>

      {/* Sort */}
      <div className="border-b border-slate-100 py-3">
        <span className="mb-2 block text-[11px] font-semibold uppercase tracking-wider text-slate-500">
          Sort by
        </span>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value as SortOption)}
          className="w-full rounded-md border border-slate-200 bg-white px-2.5 py-1.5 text-[12px] text-slate-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          {sortOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Discipline / Category */}
      <CollapsibleSection title="Discipline" count={filters.categories.length} defaultOpen>
        {categories.map((cat) => (
          <CheckboxItem
            key={cat.slug}
            label={cat.name}
            checked={filters.categories.includes(cat.slug)}
            onChange={() => toggleFilter('categories', cat.slug)}
          />
        ))}
      </CollapsibleSection>

      {/* Tool Type */}
      <CollapsibleSection title="Tool Type" count={filters.purposes.length}>
        {purposes.map((p) => (
          <CheckboxItem
            key={p}
            label={purposeLabels[p]}
            checked={filters.purposes.includes(p)}
            onChange={() => toggleFilter('purposes', p)}
          />
        ))}
      </CollapsibleSection>

      {/* Pricing */}
      <CollapsibleSection title="Pricing" count={filters.pricing.length}>
        {pricing.map((p) => (
          <CheckboxItem
            key={p}
            label={pricingLabels[p]}
            checked={filters.pricing.includes(p)}
            onChange={() => toggleFilter('pricing', p)}
          />
        ))}
      </CollapsibleSection>

      {/* Authentication */}
      <CollapsibleSection title="Authentication" count={filters.authentication.length}>
        {authentications.map((a) => (
          <CheckboxItem
            key={a}
            label={authLabels[a]}
            checked={filters.authentication.includes(a)}
            onChange={() => toggleFilter('authentication', a)}
          />
        ))}
      </CollapsibleSection>

      {/* Experience Level */}
      <CollapsibleSection title="Experience Level" count={filters.difficulty.length}>
        {difficulties.map((d) => (
          <CheckboxItem
            key={d}
            label={difficultyLabels[d]}
            checked={filters.difficulty.includes(d)}
            onChange={() => toggleFilter('difficulty', d)}
          />
        ))}
      </CollapsibleSection>

      {/* Interactivity */}
      <CollapsibleSection title="Interactivity" count={filters.interactivity.length}>
        {interactivities.map((i) => (
          <CheckboxItem
            key={i}
            label={interactivityLabels[i]}
            checked={filters.interactivity.includes(i)}
            onChange={() => toggleFilter('interactivity', i)}
          />
        ))}
      </CollapsibleSection>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden w-64 flex-shrink-0 rounded-xl border border-slate-200 bg-white p-4 lg:block">
        {sidebarContent}
      </aside>

      {/* Mobile drawer */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={onMobileClose}
          />
          <div className="absolute left-0 top-0 h-full w-80 max-w-[85vw] overflow-y-auto bg-white p-4 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-[13px] font-semibold text-slate-900">Filters</span>
              <button
                onClick={onMobileClose}
                className="rounded p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 cursor-pointer"
              >
                ✕
              </button>
            </div>
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
}
