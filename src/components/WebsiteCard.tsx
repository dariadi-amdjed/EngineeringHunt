import { Link } from 'react-router-dom';
import { ExternalLink, Info, Globe, Monitor, Smartphone, Terminal, Apple, AppWindow } from 'lucide-react';
import type { Website, Platform } from '@/types';
import { isToolOpenSource } from '@/types';
import { SiteFavicon } from './SiteFavicon';
import { Tag } from './Tag';

const platformIcons: Record<Platform, React.ReactNode> = {
  web: <Globe className="h-2.5 w-2.5" />,
  windows: <AppWindow className="h-2.5 w-2.5" />,
  mac: <Apple className="h-2.5 w-2.5" />,
  linux: <Monitor className="h-2.5 w-2.5" />,
  cli: <Terminal className="h-2.5 w-2.5" />,
  mobile: <Smartphone className="h-2.5 w-2.5" />,
};

const platformLabels: Record<Platform, string> = {
  web: 'Web',
  windows: 'Win',
  mac: 'Mac',
  linux: 'Linux',
  cli: 'CLI',
  mobile: 'Mobile',
};

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
        <SiteFavicon url={website.url} name={website.name} size="sm" />
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <div>
              <a
                href={website.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[0.7rem] font-semibold text-slate-900 no-underline hover:text-blue-600"
              >
                {website.name}
              </a>
              <p className="mt-0.5 text-[0.7rem] text-slate-500 line-clamp-1">{website.description}</p>
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
          <SiteFavicon url={website.url} name={website.name} size="sm" />
          <div className="min-w-0 flex-1">
            <a
              href={website.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[0.7rem] font-semibold text-slate-900 no-underline hover:text-blue-600"
            >
              {website.name}
            </a>
            <p className="text-[0.6rem] text-slate-400">{website.url.replace('https://', '')}</p>
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
        <p className="text-[0.7rem] leading-relaxed text-slate-500 line-clamp-2">
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
      <div className="flex items-center gap-2 border-t border-slate-100 px-4 py-2.5">
        <span className="font-mono text-[0.6rem] uppercase tracking-wider text-slate-400">
          {website.difficulty[0] || 'all'}
        </span>
        {isToolOpenSource(website) && (
          <span className="font-mono text-[0.55rem] uppercase tracking-wider text-emerald-500">
            open source
          </span>
        )}
        <div className="ml-auto flex items-center gap-1">
          {website.platform.map((p) => (
            <span
              key={p}
              className="flex items-center gap-0.5 rounded bg-slate-100 px-1.5 py-0.5 font-mono text-[0.5rem] uppercase tracking-wider text-slate-500"
              title={platformLabels[p]}
            >
              {platformIcons[p]}
              {platformLabels[p]}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
