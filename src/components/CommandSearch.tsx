import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ArrowRight, X } from 'lucide-react';
import { searchWebsites } from '@/data/websites';

type CommandSearchProps = {
  open: boolean;
  onClose: () => void;
};

export function CommandSearch({ open, onClose }: CommandSearchProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (open) {
      setQuery('');
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (open) {
          onClose();
        } else {
          onClose(); // toggle handled by parent
        }
      }
      if (e.key === 'Escape' && open) {
        onClose();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const results = query.length > 0 ? searchWebsites(query).slice(0, 8) : [];

  const popularSearches = ['ESP32', 'Arduino', 'ROS', 'PCB Design', 'IoT', 'Sensors'];

  function handleSelect(slug: string) {
    onClose();
    navigate(`/website/${slug}`);
  }

  function handleSearch() {
    if (query.trim()) {
      onClose();
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  }

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-slate-900/20" onClick={onClose} />
      <div className="absolute left-1/2 top-[15%] w-full max-w-lg -translate-x-1/2 rounded-lg border border-slate-200 bg-white shadow-xl">
        <div className="flex items-center border-b border-slate-100 px-4">
          <Search className="h-4 w-4 text-slate-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search Engineering Finder"
            className="flex-1 bg-transparent px-3 py-3.5 text-[15px] text-slate-900 outline-none placeholder:text-slate-400"
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleSearch();
            }}
          />
          <button
            onClick={onClose}
            className="rounded p-1 text-slate-400 transition-colors hover:text-slate-600"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {query.length === 0 && (
          <div className="px-4 py-3">
            <p className="mb-2 text-[11px] font-medium uppercase tracking-wider text-slate-400">
              Popular searches
            </p>
            <div className="flex flex-wrap gap-1.5">
              {popularSearches.map((s) => (
                <button
                  key={s}
                  onClick={() => setQuery(s)}
                  className="rounded bg-slate-100 px-2.5 py-1 text-[12px] font-medium text-slate-600 transition-colors hover:bg-slate-200"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {results.length > 0 && (
          <div className="max-h-80 overflow-y-auto px-2 py-2">
            {results.map((site) => (
              <button
                key={site.id}
                onClick={() => handleSelect(site.slug)}
                className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-left transition-colors hover:bg-slate-50"
              >
                <div>
                  <p className="text-[13px] font-medium text-slate-900">{site.name}</p>
                  <p className="text-[12px] text-slate-400">
                    {site.topics.slice(0, 3).join(' · ')}
                  </p>
                </div>
                <ArrowRight className="h-3.5 w-3.5 text-slate-300" />
              </button>
            ))}
          </div>
        )}

        {query.length > 0 && results.length === 0 && (
          <div className="px-4 py-6 text-center">
            <p className="text-[13px] text-slate-400">No results found</p>
          </div>
        )}

        <div className="flex items-center justify-between border-t border-slate-100 px-4 py-2">
          <div className="flex items-center gap-3 text-[11px] text-slate-400">
            <span>
              <kbd className="rounded border border-slate-200 bg-slate-50 px-1 py-0.5 font-mono">
                ↵
              </kbd>{' '}
              to search
            </span>
            <span>
              <kbd className="rounded border border-slate-200 bg-slate-50 px-1 py-0.5 font-mono">
                esc
              </kbd>{' '}
              to close
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
