import { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronDown, X } from 'lucide-react';
import { categories } from '@/data/categories';
import type {
  SearchFilters,
  Purpose,
  Pricing,
  Authentication,
  Difficulty,
} from '@/types';

/* ── Labels ──────────────────────────────────────────────────────────── */

const purposeLabels: Record<Purpose, string> = {
  simulator: 'Simulator',
  'eda-tool': 'EDA Tool',
  calculator: 'Calculator',
  'datasheet-reference': 'Datasheet / Reference',
  'community-docs': 'Community & Docs',
};

const pricingLabels: Record<Pricing, string> = {
  free: 'Free',
  'open-source': 'Open Source',
  freemium: 'Freemium',
  paid: 'Paid',
};

const authLabels: Record<Authentication, string> = {
  'no-account': 'No Account Needed',
  'optional-signup': 'Optional Sign-up',
  'signup-required': 'Sign-up Required',
};

const difficultyLabels: Record<Difficulty, string> = {
  beginner: 'Beginner / Student',
  intermediate: 'Intermediate',
  advanced: 'Expert / Pro',
};

/* ── Option arrays ───────────────────────────────────────────────────── */

const allPurposes: Purpose[] = [
  'simulator',
  'eda-tool',
  'calculator',
  'datasheet-reference',
  'community-docs',
];
const allPricing: Pricing[] = ['free', 'open-source', 'freemium', 'paid'];
const allAuth: Authentication[] = [
  'no-account',
  'optional-signup',
  'signup-required',
];
const allDifficulty: Difficulty[] = ['beginner', 'intermediate', 'advanced'];

/* ── Props ───────────────────────────────────────────────────────────── */

interface FilterBarProps {
  filters: SearchFilters;
  onFilterChange: (f: Partial<SearchFilters>) => void;
}

/* ── FilterDropdown ──────────────────────────────────────────────────── */

interface FilterDropdownProps {
  options: { value: string; label: string }[];
  selected: string[];
  onApply: (values: string[]) => void;
  onClear: () => void;
}

function FilterDropdown({
  options,
  selected,
  onApply,
  onClear,
}: FilterDropdownProps) {
  const [draft, setDraft] = useState<string[]>(selected);

  useEffect(() => {
    setDraft(selected);
  }, [selected]);

  const toggle = (v: string) => {
    setDraft((prev) =>
      prev.includes(v) ? prev.filter((x) => x !== v) : [...prev, v]
    );
  };

  return (
    <div className="flex flex-col">
      <div className="max-h-60 overflow-y-auto px-1 py-1">
        {options.map((opt) => (
          <label
            key={opt.value}
            className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-[12px] text-slate-600 transition-colors hover:bg-slate-50"
          >
            <input
              type="checkbox"
              checked={draft.includes(opt.value)}
              onChange={() => toggle(opt.value)}
              className="h-3.5 w-3.5 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
            />
            {opt.label}
          </label>
        ))}
      </div>
      <div className="flex items-center justify-between gap-2 border-t border-slate-100 px-3 py-2">
        <button
          onClick={() => {
            setDraft([]);
            onClear();
          }}
          className="text-[11px] font-medium text-slate-400 hover:text-slate-600 cursor-pointer"
        >
          Clear
        </button>
        <button
          onClick={() => onApply(draft)}
          className="rounded-md bg-blue-600 px-4 py-1.5 text-[11px] font-medium text-white transition-colors hover:bg-blue-700 cursor-pointer"
        >
          Apply
        </button>
      </div>
    </div>
  );
}

/* ── Chip ────────────────────────────────────────────────────────────── */

interface ChipProps {
  label: string;
  count: number;
  isOpen: boolean;
  onToggle: () => void;
  onClear: () => void;
  children: React.ReactNode;
}

function Chip({ label, count, isOpen, onToggle, onClear, children }: ChipProps) {
  const chipRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [dropUp, setDropUp] = useState(false);

  useEffect(() => {
    if (isOpen && chipRef.current) {
      const rect = chipRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      setDropUp(spaceBelow < 280);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (
        chipRef.current &&
        !chipRef.current.contains(e.target as Node) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        onToggle();
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isOpen, onToggle]);

  const active = count > 0;

  return (
    <div ref={chipRef} className="relative">
      <button
        onClick={onToggle}
        className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12px] font-medium transition-colors cursor-pointer ${
          active
            ? 'border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100'
            : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50'
        }`}
      >
        {label}
        {active && (
          <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-blue-600 px-1 font-mono text-[9px] font-bold text-white">
            {count}
          </span>
        )}
        {active ? (
          <X
            className="h-3 w-3 text-blue-400 hover:text-blue-600"
            onClick={(e) => {
              e.stopPropagation();
              onClear();
            }}
          />
        ) : (
          <ChevronDown className="h-3 w-3 text-slate-400" />
        )}
      </button>

      {isOpen && (
        <div
          ref={dropdownRef}
          className={`absolute left-0 z-50 mt-1.5 w-60 rounded-xl border border-slate-200 bg-white shadow-lg ${
            dropUp ? 'bottom-full mb-1.5' : ''
          }`}
        >
          {children}
        </div>
      )}
    </div>
  );
}

/* ── FilterBar ───────────────────────────────────────────────────────── */

export function FilterBar({ filters, onFilterChange }: FilterBarProps) {
  const [openChip, setOpenChip] = useState<string | null>(null);

  const toggleChip = useCallback((id: string) => {
    setOpenChip((prev) => (prev === id ? null : id));
  }, []);

  const closeChip = useCallback(() => setOpenChip(null), []);

  const totalActive =
    filters.categories.length +
    filters.purposes.length +
    filters.pricing.length +
    filters.authentication.length +
    filters.difficulty.length;

  const clearAll = () => {
    onFilterChange({
      categories: [],
      purposes: [],
      pricing: [],
      authentication: [],
      difficulty: [],
    });
  };

  const chips = [
    {
      id: 'domain',
      label: 'Domain',
      filterKey: 'categories' as const,
      options: categories.map((c) => ({ value: c.slug, label: c.name })),
      selected: filters.categories,
    },
    {
      id: 'purpose',
      label: 'Purpose',
      filterKey: 'purposes' as const,
      options: allPurposes.map((p) => ({ value: p, label: purposeLabels[p] })),
      selected: filters.purposes,
    },
    {
      id: 'pricing',
      label: 'Pricing',
      filterKey: 'pricing' as const,
      options: allPricing.map((p) => ({ value: p, label: pricingLabels[p] })),
      selected: filters.pricing,
    },
    {
      id: 'auth',
      label: 'Authentication',
      filterKey: 'authentication' as const,
      options: allAuth.map((a) => ({ value: a, label: authLabels[a] })),
      selected: filters.authentication,
    },
    {
      id: 'level',
      label: 'Level',
      filterKey: 'difficulty' as const,
      options: allDifficulty.map((d) => ({
        value: d,
        label: difficultyLabels[d],
      })),
      selected: filters.difficulty,
    },
  ];

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-[12px] font-semibold text-slate-700 mr-0.5">Filters:</span>
      {chips.map((chip) => (
        <Chip
          key={chip.id}
          label={chip.label}
          count={chip.selected.length}
          isOpen={openChip === chip.id}
          onToggle={() => toggleChip(chip.id)}
          onClear={() => {
            onFilterChange({ [chip.filterKey]: [] });
          }}
        >
          <FilterDropdown
            options={chip.options}
            selected={chip.selected}
            onApply={(values) => {
              onFilterChange({ [chip.filterKey]: values });
              closeChip();
            }}
            onClear={() => {
              onFilterChange({ [chip.filterKey]: [] });
              closeChip();
            }}
          />
        </Chip>
      ))}

      {totalActive > 0 && (
        <button
          onClick={clearAll}
          className="flex items-center gap-1 rounded-full px-3 py-1.5 text-[12px] font-medium text-slate-400 transition-colors hover:text-slate-600 cursor-pointer"
        >
          <X className="h-3 w-3" />
          Clear all
        </button>
      )}
    </div>
  );
}
