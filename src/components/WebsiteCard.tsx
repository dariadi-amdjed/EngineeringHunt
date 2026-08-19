import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import type { Website } from '@/types';
import { Tag } from './Tag';

type WebsiteCardProps = {
  website: Website;
  showRelevance?: boolean;
  relevance?: string;
};

export function WebsiteCard({ website, showRelevance = false, relevance }: WebsiteCardProps) {
  return (
    <div className="group flex flex-col justify-between rounded-lg border border-slate-200 bg-white p-5 transition-colors hover:border-slate-300">
      <div>
        <div className="mb-2 flex items-start justify-between">
          <Link
            to={`/website/${website.slug}`}
            className="text-[15px] font-semibold text-slate-900 no-underline transition-colors hover:text-blue-600"
          >
            {website.name}
          </Link>
          <a
            href={website.url}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 flex-shrink-0 text-slate-400 transition-colors hover:text-slate-600"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <p className="mb-3 text-[13px] leading-relaxed text-slate-500">
          {website.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {website.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
        <div className="flex items-center gap-2 text-[12px] text-slate-400">
          <span>{website.categories.map((c) => c.replace(/-/g, ' ')).join(' · ')}</span>
          <span>·</span>
          <span>{website.difficulty[0]}</span>
        </div>

        {showRelevance && relevance && (
          <span className="rounded-full bg-green-50 px-2 py-0.5 text-[11px] font-medium text-green-700">
            {relevance}
          </span>
        )}

        {!showRelevance && (
          <Link
            to={`/website/${website.slug}`}
            className="text-[12px] font-medium text-slate-400 no-underline transition-colors hover:text-slate-900"
          >
            Visit →
          </Link>
        )}
      </div>
    </div>
  );
}
