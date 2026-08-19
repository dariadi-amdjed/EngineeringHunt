import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import { GithubIcon } from '@/components/GithubIcon';
import { cn } from '@/lib/utils';

type NavbarProps = {
  onSearchOpen: () => void;
};

export function Navbar({ onSearchOpen }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: '/search', label: 'Explore' },
    { to: '/categories', label: 'Categories' },
    { to: '/about', label: 'About' },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-8">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-semibold tracking-tight text-slate-900 no-underline"
          >
            <Search className="h-4 w-4 text-slate-500" strokeWidth={2.5} />
            Engineering Finder
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  'rounded-md px-3 py-1.5 text-[13px] font-medium no-underline transition-colors',
                  location.pathname === link.to ||
                    (link.to !== '/' && location.pathname.startsWith(link.to))
                    ? 'bg-slate-100 text-slate-900'
                    : 'text-slate-500 hover:text-slate-900'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onSearchOpen}
            className="hidden items-center gap-2 rounded-md border border-slate-200 px-3 py-1.5 text-[13px] text-slate-400 transition-colors hover:border-slate-300 hover:text-slate-600 sm:flex"
          >
            <Search className="h-3.5 w-3.5" />
            <span className="hidden lg:inline">Search...</span>
            <kbd className="ml-1 hidden rounded border border-slate-200 bg-slate-50 px-1.5 py-0.5 text-[11px] font-mono text-slate-400 lg:inline">
              ⌘K
            </kbd>
          </button>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-md px-3 py-1.5 text-[13px] font-medium text-slate-500 transition-colors hover:text-slate-900 sm:flex"
          >
            <GithubIcon className="h-4 w-4" />
            <span className="hidden md:inline">GitHub</span>
          </a>

          <button
            onClick={onSearchOpen}
            className="rounded-md p-2 text-slate-400 transition-colors hover:text-slate-600 sm:hidden"
          >
            <Search className="h-4 w-4" />
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-md p-2 text-slate-400 transition-colors hover:text-slate-600 md:hidden"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="border-t border-slate-100 bg-white px-4 pb-4 pt-2 md:hidden">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={cn(
                'block rounded-md px-3 py-2 text-sm font-medium no-underline transition-colors',
                location.pathname === link.to
                  ? 'bg-slate-100 text-slate-900'
                  : 'text-slate-500 hover:text-slate-900'
              )}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-slate-500 transition-colors hover:text-slate-900"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </a>
        </nav>
      )}
    </header>
  );
}
