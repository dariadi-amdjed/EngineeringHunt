import { useState } from 'react';
import { GithubIcon } from './GithubIcon';
import { Star } from 'lucide-react';

export function GitHubStarBadge() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="https://github.com/dariadi-amdjed/EngineeringHunt"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`flex items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-[0.65rem] font-medium no-underline transition-all ${
        hovered
          ? 'border-slate-300 bg-slate-50 text-slate-700'
          : 'border-slate-200 bg-white text-slate-500'
      }`}
    >
      <GithubIcon className="h-3.5 w-3.5" />
      <span className="hidden sm:inline">Star on GitHub</span>
      <Star className="h-2.5 w-2.5 fill-amber-400 text-amber-400 sm:hidden" />
    </a>
  );
}
