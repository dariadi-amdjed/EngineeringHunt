import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ExternalLink, X, Loader2, Check, ChevronRight } from 'lucide-react';
import { aiSearch } from '@/data/ai-search';
import { websites } from '@/data/websites';
import { isToolOpenSource } from '@/types';
import type { AISearchResult, Website } from '@/types';

interface AISearchOverlayProps {
  query: string;
  isOpen: boolean;
  onClose: () => void;
}

const searchSteps = [
  'Analyzing query...',
  'Searching EngineeringHunt repository...',
  'Matching against domain categories...',
  'Filtering relevant tools...',
  'Ranking results by relevance...',
  'Compiling recommendations...',
];

function FaviconImg({ name }: { url: string; name: string }) {
  return (
    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-[0.6rem] font-bold text-slate-500">
      {name.charAt(0)}
    </div>
  );
}

function MarqueeStrip({ items }: { items: Website[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden py-3">
      <div className="animate-ai-marquee flex items-center gap-4">
        {doubled.map((site, i) => (
          <div
            key={`${site.slug}-${i}`}
            className="flex flex-shrink-0 items-center gap-2 rounded-lg border border-slate-100 bg-white px-3 py-1.5"
          >
            <FaviconImg url={site.url} name={site.name} />
            <span className="whitespace-nowrap text-[0.6rem] font-medium text-slate-600">
              {site.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProcessingState({ query }: { query: string }) {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev >= searchSteps.length - 1) return prev;
        return prev + 1;
      });
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-8">
      {/* Query echo */}
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50">
          <Loader2 className="h-5 w-5 text-blue-600 animate-ai-spin" />
        </div>
        <div>
          <p className="text-[0.6rem] font-medium uppercase tracking-wider text-slate-400">Searching for</p>
          <p className="text-lg font-semibold text-slate-900">"{query}"</p>
        </div>
      </div>

      {/* Streaming steps */}
      <div className="mb-8 space-y-2">
        {searchSteps.map((step, i) => {
          const isActive = i === activeStep;
          const isDone = i < activeStep;
          return (
            <div
              key={i}
              className={`flex items-center gap-3 rounded-lg px-3 py-2 text-[0.7rem] transition-all duration-300 ${
                isActive
                  ? 'bg-blue-50 text-blue-700 font-medium'
                  : isDone
                    ? 'text-slate-400'
                    : 'text-slate-300'
              }`}
            >
              {isDone ? (
                <Check className="h-3.5 w-3.5 flex-shrink-0 text-emerald-500" />
              ) : isActive ? (
                <ChevronRight className="h-3.5 w-3.5 flex-shrink-0 text-blue-600 animate-pulse" />
              ) : (
                <div className="h-3.5 w-3.5 flex-shrink-0 rounded-full border border-slate-200" />
              )}
              <span>{step}</span>
              {isActive && (
                <span className="animate-ai-dot-bounce ml-auto flex gap-0.5">
                  <span className="inline-block h-1 w-1 rounded-full bg-blue-400" />
                  <span className="inline-block h-1 w-1 rounded-full bg-blue-400" />
                  <span className="inline-block h-1 w-1 rounded-full bg-blue-400" />
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Favicon carousel */}
      <div>
        <p className="mb-2 font-mono text-[0.55rem] uppercase tracking-wider text-slate-400">
          Scanning tools
        </p>
        <MarqueeStrip items={websites.slice(0, 12)} />
      </div>
    </div>
  );
}

function ResultsView({ result, query }: { result: AISearchResult; query: string }) {
  const best = result.bestMatch;
  const others = result.otherResults;

  return (
    <div className="py-6">
      {/* Query echo */}
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50">
          <Check className="h-4 w-4 text-emerald-600" />
        </div>
        <div>
          <p className="text-[0.6rem] font-medium uppercase tracking-wider text-slate-400">Results for</p>
          <p className="text-[0.8rem] font-semibold text-slate-900">"{query}"</p>
        </div>
      </div>

      {/* Best Match - Hero Card */}
      <div className="mb-6 overflow-hidden rounded-xl border border-blue-200 bg-white shadow-sm">
        <div className="flex items-center gap-2 border-b border-blue-100 bg-blue-50 px-5 py-2.5">
          <div className="animate-ai-badge-shimmer rounded-full px-3 py-0.5">
            <span className="flex items-center gap-1.5 text-[0.6rem] font-bold uppercase tracking-wider text-white">
              <Sparkles className="h-3 w-3" />
              AI Recommended
            </span>
          </div>
        </div>
        <div className="p-5">
          <div className="flex items-start gap-4">
            <FaviconImg url={best.url} name={best.name} />
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-3">
                <div>
                  <a
                    href={best.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold text-slate-900 no-underline hover:text-blue-600"
                  >
                    {best.name}
                  </a>
                  <p className="text-[0.65rem] text-slate-400">
                    {best.url.replace('https://', '')}
                  </p>
                </div>
              </div>
              <p className="mt-3 text-[0.7rem] leading-relaxed text-slate-600">
                {result.matchReason}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {best.purposes.map((p) => (
                  <span
                    key={p}
                    className="rounded-md bg-violet-50 px-2 py-0.5 text-[0.55rem] font-medium text-violet-700"
                  >
                    {p.replace('-', ' ')}
                  </span>
                ))}
                <span className="rounded-md bg-emerald-50 px-2 py-0.5 text-[0.55rem] font-medium text-emerald-700">
                  {best.pricing.replace('-', ' ')}
                </span>
                {isToolOpenSource(best) && (
                  <span className="rounded-md bg-emerald-50 px-2 py-0.5 text-[0.55rem] font-medium text-emerald-700">
                    Open Source
                  </span>
                )}
              </div>
              <div className="mt-4 flex items-center gap-2">
                <a
                  href={best.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-[0.65rem] font-medium text-white no-underline transition-colors hover:bg-blue-700"
                >
                  Visit Website
                  <ExternalLink className="h-3 w-3" />
                </a>
                <Link
                  to={`/website/${best.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-4 py-2 text-[0.65rem] font-medium text-slate-700 no-underline transition-colors hover:bg-slate-50"
                >
                  More Details
                  <ChevronRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interpretation tags */}
      {result.interpretedTags.length > 0 && (
        <div className="mb-6 flex flex-wrap items-center gap-2">
          <span className="text-[0.6rem] font-medium text-slate-400">Interpreted as:</span>
          {result.interpretedTags.map((step, i) => (
            <span
              key={i}
              className="rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-[0.6rem] font-medium text-slate-600"
            >
              {step.label}
            </span>
          ))}
        </div>
      )}

      {/* Alternative results */}
      {others.length > 0 && (
        <div>
          <p className="mb-3 font-mono text-[0.55rem] uppercase tracking-wider text-slate-400">
            Alternative Recommendations
          </p>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {others.map((site, i) => (
              <div
                key={site.slug}
                className="animate-ai-result-slide-up group flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4 transition-all hover:border-blue-200 hover:shadow-sm"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <FaviconImg url={site.url} name={site.name} />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <a
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[0.7rem] font-semibold text-slate-900 no-underline hover:text-blue-600"
                    >
                      {site.name}
                    </a>
                    <div className="flex items-center gap-0.5">
                      <a
                        href={site.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-6 w-6 items-center justify-center rounded text-slate-300 transition-colors hover:text-slate-500"
                      >
                        <ExternalLink className="h-3 w-3" />
                      </a>
                      <Link
                        to={`/website/${site.slug}`}
                        className="flex h-6 w-6 items-center justify-center rounded text-slate-300 transition-colors hover:text-blue-500"
                      >
                        <ChevronRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                  <p className="mt-0.5 text-[0.65rem] text-slate-500 line-clamp-2">
                    {site.description}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-1">
                    {site.purposes.slice(0, 2).map((p) => (
                      <span
                        key={p}
                        className="rounded bg-slate-100 px-1.5 py-0.5 text-[0.55rem] text-slate-500"
                      >
                        {p.replace('-', ' ')}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function AISearchOverlay({ query, isOpen, onClose }: AISearchOverlayProps) {
  const [phase, setPhase] = useState<'idle' | 'processing' | 'results'>('idle');
  const [result, setResult] = useState<AISearchResult | null>(null);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (!isOpen || !query) {
      setPhase('idle');
      setResult(null);
      setClosing(false);
      return;
    }

    setPhase('processing');
    setResult(null);

    const timer = setTimeout(() => {
      const searchResult = aiSearch(query);
      setResult(searchResult);
      setPhase('results');
    }, 2200);

    return () => clearTimeout(timer);
  }, [isOpen, query]);

  const handleClose = useCallback(() => {
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      onClose();
    }, 300);
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 ${
          closing ? 'opacity-0' : 'opacity-100'
        }`}
        onClick={handleClose}
      />

      {/* Panel */}
      <div
        className={`relative z-10 mx-4 mt-16 w-full max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl ${
          closing ? 'animate-ai-overlay-out' : 'animate-ai-overlay-in'
        }`}
      >
        {/* Fixed top search query bar */}
        <div className="flex items-center gap-3 border-b border-slate-100 bg-slate-50/80 px-5 py-3">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
          </div>
          <span className="text-[0.65rem] font-semibold text-slate-700">AI Search</span>
          <div className="flex-1 truncate rounded-md border border-slate-200 bg-white px-3 py-1 text-[0.7rem] text-slate-600">
            {query}
          </div>
          {phase === 'processing' && (
            <Loader2 className="h-4 w-4 flex-shrink-0 text-blue-600 animate-ai-spin" />
          )}
          {phase === 'results' && (
            <Check className="h-4 w-4 flex-shrink-0 text-emerald-500" />
          )}
          <button
            onClick={handleClose}
            className="flex h-7 w-7 items-center justify-center rounded-md text-slate-400 transition-colors hover:bg-slate-200 hover:text-slate-600 cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="max-h-[calc(100vh-200px)] overflow-y-auto">
          <div className="px-5">
            {phase === 'processing' && <ProcessingState query={query} />}
            {phase === 'results' && result && (
              <ResultsView result={result} query={query} />
            )}
            {phase === 'results' && !result && (
              <div className="py-12 text-center">
                <p className="text-[0.75rem] font-medium text-slate-500">No results found for "{query}"</p>
                <p className="mt-1 text-[0.65rem] text-slate-400">Try a different search term</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
