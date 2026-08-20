import { Search, Sparkles, ArrowRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

interface SearchBarProps {
  variant?: 'hero' | 'compact';
  className?: string;
  onAISearch?: (query: string) => void;
}

const suggestions = [
  'Best open-source PCB design tools',
  'Free robotics simulation software',
  'ESP32 simulator for beginners',
  'IoT platforms with free tier',
  'Verilog HDL practice online',
  'KiCad alternatives for circuit design',
];

export function SearchBar({ variant = 'hero', className = '', onAISearch }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [currentSuggestion, setCurrentSuggestion] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (variant !== 'hero') return;
    const interval = setInterval(() => {
      setCurrentSuggestion((prev) => (prev + 1) % suggestions.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [variant]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    onAISearch?.(query.trim());
  };

  if (variant === 'compact') {
    return (
      <form onSubmit={handleSubmit} className={className}>
        <div className="relative flex items-center">
          <Search className="pointer-events-none absolute left-3 h-4 w-4 text-slate-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search tools, platforms, resources…"
            className="h-10 w-full rounded-lg border border-slate-200 bg-white py-2 pl-10 pr-24 text-[0.7rem] text-slate-900 placeholder-slate-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="absolute right-1.5 top-1/2 flex h-7 -translate-y-1/2 items-center gap-1.5 rounded-md bg-blue-600 px-3 text-[0.65rem] font-medium text-white transition-colors hover:bg-blue-700 cursor-pointer"
          >
            <Sparkles className="h-3 w-3" />
            <span className="hidden sm:inline">Search</span>
            <ArrowRight className="h-3 w-3 sm:hidden" />
          </button>
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
            placeholder={suggestions[currentSuggestion]}
            className="h-14 w-full rounded-xl border border-slate-200 bg-white py-3 pl-12 pr-36 text-[0.85rem] text-slate-900 placeholder-slate-400 shadow-sm transition-all focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 sm:text-[0.75rem]"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 flex h-10 -translate-y-1/2 items-center gap-2 rounded-lg bg-blue-600 px-4 text-[0.7rem] font-medium text-white transition-colors hover:bg-blue-700 cursor-pointer"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Smart Search</span>
            <ArrowRight className="h-3.5 w-3.5 sm:hidden" />
          </button>
        </div>
      </form>
    </div>
  );
}
