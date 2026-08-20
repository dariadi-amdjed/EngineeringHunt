import { Search, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { aiSearch } from '@/data/ai-search';

interface SearchBarProps {
  variant?: 'hero' | 'compact';
  className?: string;
}

const suggestions = [
  'Best open-source PCB design tools',
  'Free robotics simulation software',
  'Machine learning for embedded systems',
  'IoT platforms with free tier',
  'Computer vision libraries for beginners',
  'KiCad alternatives for circuit design',
];

export function SearchBar({ variant = 'hero', className = '' }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [aiResult, setAiResult] = useState<string[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [currentSuggestion, setCurrentSuggestion] = useState(0);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (variant !== 'hero') return;
    const interval = setInterval(() => {
      setCurrentSuggestion((prev) => (prev + 1) % suggestions.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [variant]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsSearching(true);
    setAiResult([]);

    try {
      const result = aiSearch(query);
      if (result) {
        setAiResult([
          result.bestMatch.name,
          ...result.otherResults.map((w) => w.name),
        ]);
      }
    } finally {
      setIsSearching(false);
      navigate(`/explore?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  if (variant === 'compact') {
    return (
      <form onSubmit={handleSubmit} className={className}>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search tools, platforms, resources…"
            className="h-10 w-full rounded-lg border border-slate-200 bg-white py-2 pl-10 pr-4 text-[13px] text-slate-900 placeholder-slate-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </form>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={suggestions[currentSuggestion]}
            className="h-14 w-full rounded-xl border border-slate-200 bg-white py-3 pl-12 pr-32 text-[15px] text-slate-900 placeholder-slate-400 shadow-sm transition-all focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 sm:text-[14px]"
          />
          <button
            type="submit"
            disabled={isSearching}
            className="absolute right-2 top-1/2 flex h-10 -translate-y-1/2 items-center gap-2 rounded-lg bg-blue-600 px-4 text-[13px] font-medium text-white transition-colors hover:bg-blue-700 disabled:opacity-50 cursor-pointer"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">{isSearching ? 'Searching…' : 'AI Search'}</span>
          </button>
        </div>
      </form>

      {/* AI Results inline */}
      {aiResult.length > 0 && (
        <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4 shadow-lg">
          <div className="mb-3 flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-blue-600" />
            <span className="text-[13px] font-medium text-slate-900">AI Suggestions</span>
          </div>
          <div className="space-y-2">
            {aiResult.map((name, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-lg border border-slate-100 p-3 transition-colors hover:bg-slate-50"
              >
                <div>
                  <p className="text-[13px] font-medium text-slate-900">{name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
