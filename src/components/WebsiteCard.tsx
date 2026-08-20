import { Link } from 'react-router-dom';
import { ExternalLink, Info } from 'lucide-react';
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
      <div className="group flex items-start gap-4 rounded-lg border border-slate-200 bg-white p-4 transition-all hover:border-slate-300 hover:shadow-sm">
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <div>
              <a
                href={website.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[14px] font-semibold text-slate-900 no-underline hover:text-blue-600"
              >
                {website.name}
              </a>
              <p className="mt-0.5 text-[13px] text-slate-500 line-clamp-1">{website.description}</p>
            </div>
            <div className="flex items-center gap-1">
              <a
                href={website.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md text-slate-300 transition-colors hover:bg-slate-100 hover:text-slate-500"
              >
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
              <Link
                to={`/website/${website.slug}`}
                className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md text-slate-300 transition-colors hover:bg-blue-50 hover:text-blue-500"
                title="More details"
              >
                <Info className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
          <div className="mt-2 flex flex-wrap items-center gap-1.5">
            <Tag variant="category">{categoryLabel(website.category)}</Tag>
            {website.purposes[0] && <Tag variant="purpose">{website.purposes[0]}</Tag>}
            <Tag variant="pricing">{website.pricing}</Tag>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group flex flex-col rounded-lg border border-slate-200 bg-white transition-all hover:border-slate-300 hover:shadow-sm">
      {/* Header */}
      <div className="flex items-start justify-between p-4 pb-3">
        <div className="flex items-start gap-3 min-w-0 flex-1">
          {website.imageUrl && (
            <img
              src={website.imageUrl}
              alt=""
              className="mt-0.5 h-8 w-8 flex-shrink-0 rounded-md border border-slate-100 object-contain"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
          )}
          <div className="min-w-0 flex-1">
            <a
              href={website.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] font-semibold text-slate-900 no-underline hover:text-blue-600"
            >
              {website.name}
            </a>
            <p className="text-[11px] text-slate-400">{website.url.replace('https://', '')}</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <a
            href={website.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md text-slate-300 transition-colors hover:bg-slate-100 hover:text-slate-500"
          >
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <Link
            to={`/website/${website.slug}`}
            className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md text-slate-300 transition-colors hover:bg-blue-50 hover:text-blue-500"
            title="More details"
          >
            <Info className="h-3.5 w-3.5" />
          </Link>
        </div>
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
    </div>
  );
}
