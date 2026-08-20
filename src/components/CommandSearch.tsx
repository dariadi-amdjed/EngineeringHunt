import { useEffect, useState, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';
import { websites } from '@/data/websites';

interface CommandSearchProps {
  open: boolean;
  onClose: () => void;
}

export function CommandSearch({ open, onClose }: CommandSearchProps) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const filteredResults = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return websites
      .filter(
        (w) =>
          w.name.toLowerCase().includes(q) ||
          w.description.toLowerCase().includes(q) ||
          w.tags.some((t) => t.toLowerCase().includes(q)) ||
          w.category.replace(/-/g, ' ').includes(q)
      )
      .slice(0, 6);
  }, [query]);

  useEffect(() => {
    if (!open) {
      setQuery('');
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [open, onClose]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Enter' && query.trim()) {
        onClose();
        navigate(`/explore?q=${encodeURIComponent(query.trim())}`);
      }
    },
    [query, onClose, navigate]
  );

  const handleSelect = useCallback(
    (slug: string) => {
      onClose();
      navigate(`/website/${slug}`);
    },
    [onClose, navigate]
  );

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 w-full max-w-lg rounded-xl border border-slate-200 bg-white shadow-2xl">
        {/* Search input */}
        <div className="flex items-center gap-3 border-b border-slate-200 px-4">
          <Search className="h-4 w-4 flex-shrink-0 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search websites, tools, categories…"
            autoFocus
            className="flex-1 bg-transparent py-3.5 text-[14px] text-slate-900 placeholder-slate-400 outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="rounded p-0.5 text-slate-400 hover:bg-slate-100 cursor-pointer"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
          <button
            onClick={onClose}
            className="rounded border border-slate-200 px-1.5 py-0.5 text-[10px] font-medium text-slate-400 cursor-pointer"
          >
            ESC
          </button>
        </div>

        {/* Results */}
        <div className="max-h-80 overflow-y-auto p-2">
          {query && filteredResults.length > 0 && (
            <div>
              <p className="px-2 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                Websites
              </p>
              {filteredResults.map((w) => (
                <button
                  key={w.slug}
                  onClick={() => handleSelect(w.slug)}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-colors hover:bg-slate-50 cursor-pointer"
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-[13px] font-medium text-slate-900">{w.name}</p>
                    <p className="text-[11px] text-slate-500 truncate">{w.description}</p>
                  </div>
                  <ArrowRight className="h-3 w-3 flex-shrink-0 text-slate-300" />
                </button>
              ))}
            </div>
          )}

          {query && filteredResults.length === 0 && (
            <div className="px-3 py-8 text-center">
              <p className="text-[13px] text-slate-500">No results found</p>
              <p className="mt-1 text-[12px] text-slate-400">
                Press Enter for a broader search
              </p>
            </div>
          )}

          {!query && (
            <div>
              <p className="px-2 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                Quick Links
              </p>
              <button
                onClick={() => { onClose(); navigate('/explore'); }}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-[13px] text-slate-600 transition-colors hover:bg-slate-50 cursor-pointer"
              >
                <Search className="h-3.5 w-3.5 text-slate-400" />
                Browse all websites
              </button>
              <button
                onClick={() => { onClose(); navigate('/categories'); }}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-[13px] text-slate-600 transition-colors hover:bg-slate-50 cursor-pointer"
              >
                <Sparkles className="h-3.5 w-3.5 text-slate-400" />
                Explore categories
              </button>
              <button
                onClick={() => { onClose(); navigate('/submit'); }}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-[13px] text-slate-600 transition-colors hover:bg-slate-50 cursor-pointer"
              >
                Submit a website
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
