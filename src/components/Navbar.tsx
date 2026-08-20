import { Link, NavLink } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { GithubIcon } from './GithubIcon';

const links = [
  { to: '/explore', label: 'Explore' },
  { to: '/categories', label: 'Categories' },
  { to: '/submit', label: 'Submit Website' },
  { to: '/about', label: 'About' },
];

interface NavbarProps {
  onSearchOpen: () => void;
}

export function Navbar({ onSearchOpen }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 no-underline">
          <img
            src="images/photo.png"
            alt="EngineeringHunt"
            className="h-7 w-7 rounded object-cover"
          />
          <span className="text-[15px] font-bold tracking-tight text-slate-900">
            EngineeringHunt
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-md px-2.5 py-1.5 text-[13px] font-medium no-underline transition-colors ${
                  isActive
                    ? 'bg-slate-100 text-slate-900'
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-1">
          <button
            onClick={onSearchOpen}
            className="flex h-8 items-center gap-2 rounded-md border border-slate-200 bg-white px-2.5 text-[13px] text-slate-400 transition-colors hover:border-slate-300 hover:text-slate-600 cursor-pointer"
          >
            <Search className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Search…</span>
            <kbd className="hidden rounded border border-slate-200 bg-slate-50 px-1 py-0.5 font-mono text-[10px] text-slate-400 sm:inline">
              ⌘K
            </kbd>
          </button>

          <a
            href="https://github.com/jamesvidler/engineeringhunt"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-8 w-8 items-center justify-center rounded-md text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
          >
            <GithubIcon className="h-4 w-4" />
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-8 w-8 items-center justify-center rounded-md text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700 md:hidden cursor-pointer"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white px-4 pb-3 pt-2 md:hidden">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `block rounded-md px-3 py-2 text-[13px] font-medium no-underline transition-colors ${
                  isActive
                    ? 'bg-slate-100 text-slate-900'
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
