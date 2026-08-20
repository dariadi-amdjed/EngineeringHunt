import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import type { Website } from '@/types';
import { Tag } from './Tag';

interface WebsiteCardProps {
  website: Website;
  layout?: 'grid' | 'list';
}

function categoryLabel(slug: string): string {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

export function WebsiteCard({ website, layout = 'grid' }: WebsiteCardProps) {
  if (layout === 'list') {
    return (
      <Link
        to={`/website/${website.slug}`}
        className="group flex items-start gap-4 rounded-lg border border-slate-200 bg-white p-4 no-underline transition-all hover:border-slate-300 hover:shadow-sm"
      >
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="text-[14px] font-semibold text-slate-900 group-hover:text-blue-600">
                {website.name}
              </h3>
              <p className="mt-0.5 text-[13px] text-slate-500 line-clamp-1">{website.description}</p>
            </div>
            <ExternalLink className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-slate-300 transition-colors group-hover:text-slate-500" />
          </div>
          <div className="mt-2 flex flex-wrap items-center gap-1.5">
            <Tag variant="category">{categoryLabel(website.category)}</Tag>
            {website.purposes[0] && <Tag variant="purpose">{website.purposes[0]}</Tag>}
            <Tag variant="pricing">{website.pricing}</Tag>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/website/${website.slug}`}
      className="group flex flex-col rounded-lg border border-slate-200 bg-white no-underline transition-all hover:border-slate-300 hover:shadow-sm"
    >
      {/* Header */}
      <div className="flex items-start justify-between p-4 pb-3">
        <div>
          <h3 className="text-[14px] font-semibold text-slate-900 group-hover:text-blue-600">
            {website.name}
          </h3>
          <p className="text-[11px] text-slate-400">{website.url.replace('https://', '')}</p>
        </div>
        <ExternalLink className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-slate-300 transition-colors group-hover:text-slate-500" />
      </div>

      {/* Description */}
      <div className="flex-1 px-4 pb-3">
        <p className="text-[13px] leading-relaxed text-slate-500 line-clamp-2">
          {website.description}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 px-4 pb-3">
        <Tag variant="category">{categoryLabel(website.category)}</Tag>
        {website.purposes[0] && <Tag variant="purpose">{website.purposes[0]}</Tag>}
        {website.pricing === 'free' && <Tag variant="pricing">Free</Tag>}
        {website.pricing === 'freemium' && <Tag variant="pricing">Freemium</Tag>}
      </div>

      {/* Footer stats */}
      <div className="flex items-center gap-3 border-t border-slate-100 px-4 py-2.5">
        <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
          {website.difficulty[0] || 'all'}
        </span>
        {website.openSource && (
          <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-500">
            open source
          </span>
        )}
        <span className="ml-auto font-mono text-[10px] uppercase tracking-wider text-slate-300">
          {website.platform[0]}
        </span>
      </div>
    </Link>
  );
}
