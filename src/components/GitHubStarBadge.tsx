import { useState } from 'react';
import { GithubIcon } from './GithubIcon';
import { Star } from 'lucide-react';

const MOCK_STARS = 1247;

export function GitHubStarBadge() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="https://github.com/jamesvidler/engineeringhunt"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-[12px] font-medium no-underline transition-all ${
        hovered
          ? 'border-slate-300 bg-slate-50 text-slate-700'
          : 'border-slate-200 bg-white text-slate-500'
      }`}
    >
      <GithubIcon className="h-3.5 w-3.5" />
      <span className="hidden sm:inline">Star</span>
      <span className="flex items-center gap-0.5 rounded bg-slate-100 px-1 py-0.5 font-mono text-[10px] text-slate-600">
        <Star className="h-2.5 w-2.5 fill-amber-400 text-amber-400" />
        {MOCK_STARS >= 1000 ? `${(MOCK_STARS / 1000).toFixed(1)}k` : MOCK_STARS}
      </span>
    </a>
  );
}
