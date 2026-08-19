import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { GithubIcon } from '@/components/GithubIcon';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
              <Search className="h-4 w-4 text-slate-400" strokeWidth={2.5} />
              Engineering Finder
            </div>
            <p className="mt-2 max-w-xs text-[13px] leading-relaxed text-slate-500">
              Open-source discovery for engineers and makers. Find the right engineering
              website.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-[13px] font-semibold text-slate-900">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/search" className="text-[13px] text-slate-500 no-underline transition-colors hover:text-slate-900">
                  Explore
                </Link>
              </li>
              <li>
                <Link to="/categories" className="text-[13px] text-slate-500 no-underline transition-colors hover:text-slate-900">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[13px] text-slate-500 no-underline transition-colors hover:text-slate-900">
                  About
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[13px] text-slate-500 no-underline transition-colors hover:text-slate-900"
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-[13px] font-semibold text-slate-900">Project</h4>
            <p className="text-[13px] leading-relaxed text-slate-500">
              Engineering Finder is an open-source project built for the engineering community.
            </p>
            <span className="mt-3 inline-block rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-[11px] font-medium text-slate-600">
              Open Source
            </span>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-center">
          <p className="text-[12px] text-slate-400">
            Built for the engineering community.
          </p>
        </div>
      </div>
    </footer>
  );
}
