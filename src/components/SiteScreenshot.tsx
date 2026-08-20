import { useState } from 'react';
import { ExternalLink, Monitor } from 'lucide-react';
import { getScreenshotUrl } from '@/lib/siteAssets';

interface SiteScreenshotProps {
  url: string;
  name: string;
}

export function SiteScreenshot({ url, name }: SiteScreenshotProps) {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading');

  return (
    <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white">
      {/* Loading skeleton */}
      {status === 'loading' && (
        <div className="flex h-[300px] items-center justify-center bg-slate-50 sm:h-[400px]">
          <div className="flex flex-col items-center gap-3">
            <div className="h-8 w-8 animate-pulse rounded-full bg-slate-200" />
            <span className="text-[0.65rem] text-slate-400">Loading preview…</span>
          </div>
        </div>
      )}

      {/* Fallback on error */}
      {status === 'error' && (
        <div className="flex h-[200px] flex-col items-center justify-center gap-2 bg-gradient-to-br from-slate-50 to-slate-100">
          <Monitor className="h-8 w-8 text-slate-300" strokeWidth={1.5} />
          <span className="text-[0.65rem] text-slate-400">Screenshot unavailable</span>
        </div>
      )}

      {/* Actual screenshot */}
      <img
        src={getScreenshotUrl(url)}
        alt={`Screenshot of ${name}`}
        className={`w-full object-cover ${status === 'loaded' ? 'block' : 'hidden'}`}
        onLoad={() => setStatus('loaded')}
        onError={() => setStatus('error')}
      />

      {/* Open link overlay */}
      {status === 'loaded' && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-lg bg-white/90 px-3 py-1.5 text-[0.65rem] font-medium text-slate-700 opacity-0 shadow-sm backdrop-blur-sm transition-opacity group-hover:opacity-100 no-underline"
        >
          Open site
          <ExternalLink className="h-3 w-3" />
        </a>
      )}
    </div>
  );
}
