import { Link } from 'react-router-dom';
import { ExternalLink, Sparkles } from 'lucide-react';
import type { AISearchResult } from '@/types';

interface AISearchResultsProps {
  results: AISearchResult[];
  isLoading: boolean;
}

export function AISearchResults({ results, isLoading }: AISearchResultsProps) {
  if (isLoading) {
    return (
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 animate-pulse text-blue-600" />
          <span className="text-[0.7rem] font-medium text-slate-700">Analyzing your query…</span>
        </div>
        {[1, 2, 3].map((i) => (
          <div key={i} className="animate-pulse rounded-lg border border-slate-200 bg-white p-4">
            <div className="flex items-start gap-3">
              <div className="flex-1 space-y-2">
                <div className="h-4 w-1/3 rounded bg-slate-100" />
                <div className="h-3 w-2/3 rounded bg-slate-100" />
                <div className="h-3 w-1/2 rounded bg-slate-100" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (results.length === 0) return null;

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <Sparkles className="h-4 w-4 text-blue-600" />
          <span className="text-[0.7rem] font-medium text-slate-900">
            Search Results
          </span>
        <span className="font-mono text-[0.55rem] text-slate-400">
          {results.length} result{results.length !== 1 ? 's' : ''}
        </span>
      </div>

      {results.map((result) => (
        <Link
          key={result.bestMatch.slug}
          to={`/website/${result.bestMatch.slug}`}
          className="group flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4 no-underline transition-all hover:border-blue-200 hover:shadow-sm"
        >
          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h4 className="text-[0.75rem] font-semibold text-slate-900 group-hover:text-blue-600">
                  {result.bestMatch.name}
                </h4>
                <p className="mt-0.5 text-[0.65rem] text-slate-500">{result.bestMatch.description}</p>
              </div>
              <ExternalLink className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-slate-300 transition-colors group-hover:text-slate-500" />
            </div>
            <p className="mt-2 text-[0.65rem] leading-relaxed text-slate-600">
              {result.matchReason}
            </p>
            {result.interpretedTags.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-1.5">
                {result.interpretedTags.map((step, _i) => (
                  <span
                    key={_i}
                    className="rounded bg-blue-50 px-1.5 py-0.5 text-[0.55rem] font-medium text-blue-700"
                  >
                    {step.label}
                  </span>
                ))}
              </div>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}
