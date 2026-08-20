import { useState } from 'react';
import { Globe } from 'lucide-react';
import { getFaviconUrl } from '@/lib/siteAssets';

interface SiteFaviconProps {
  url: string;
  name: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizeMap = {
  sm: 'h-8 w-8',
  md: 'h-10 w-10',
  lg: 'h-16 w-16',
};

export function SiteFavicon({ url, name, size = 'sm' }: SiteFaviconProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`${sizeMap[size]} flex flex-shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-gradient-to-br from-slate-100 to-slate-50`}
      >
        <span className="font-bold text-slate-400" style={{ fontSize: size === 'lg' ? 20 : 14 }}>
          {name.charAt(0)}
        </span>
      </div>
    );
  }

  return (
    <img
      src={getFaviconUrl(url)}
      alt=""
      className={`${sizeMap[size]} flex-shrink-0 rounded-lg border border-slate-100 bg-white object-contain`}
      onError={() => setFailed(true)}
    />
  );
}
