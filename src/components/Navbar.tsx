import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Star } from 'lucide-react';
import { useState } from 'react';
import { GithubIcon } from './GithubIcon';

const links = [
  { to: '/explore', label: 'Explore' },
  { to: '/categories', label: 'Categories' },
  { to: '/submit', label: 'Submit Website' },
  { to: '/about', label: 'About' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      {/* Blue accent — full-bleed from viewport left, clipped behind logo */}
      <div className="absolute left-0 top-0 bottom-0 w-32 sm:w-40 md:w-48 animate-nav-blue-slide-in pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 bg-[#2563EB]"
          style={{ clipPath: 'polygon(0 0, 100% 0, 76% 100%, 0 100%)' }}
        />
        <div
          className="absolute inset-0"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 76% 100%, 0 100%)',
            filter: 'blur(14px)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 50%, black 78%)',
            maskImage: 'linear-gradient(to right, transparent 50%, black 78%)',
          }}
        />
      </div>

      {/* Nav bar content */}
      <nav className="relative mx-auto flex h-14 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        {/* Logo — z-10, pushed right with ml */}
        <Link
          to="/"
          className="relative z-10 ml-14 mr-8 flex-shrink-0 select-none leading-none no-underline"
        >
          <span className="block text-lg font-black leading-none text-white tracking-tight">
            Eng
          </span>
          <span
            className="block text-[0.65rem] font-extrabold leading-none text-white/60 -mt-0.5"
            style={{
              WebkitTextStroke: '0.5px rgba(255,255,255,0.4)',
              letterSpacing: '0.06em',
            }}
          >
            Hunt
          </span>
        </Link>

        {/* Centered nav links — absolute centered in viewport */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-md px-2.5 py-1.5 text-[0.7rem] font-medium no-underline transition-colors ${
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

        {/* Spacer */}
        <div className="flex-1" />

        {/* Right side */}
        <div className="flex items-center gap-1.5">
          <a
            href="https://github.com/jamesvidler/engineeringhunt"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[0.65rem] font-medium text-slate-700 no-underline transition-colors hover:border-slate-300 hover:bg-slate-50 sm:flex"
          >
            <GithubIcon className="h-3.5 w-3.5 text-slate-600" />
            <span>Star on GitHub</span>
            <span className="ml-0.5 flex items-center gap-0.5 rounded-full bg-amber-50 px-1.5 py-0.5 text-[0.55rem] font-bold text-amber-700">
              <Star className="h-2.5 w-2.5 fill-amber-400 text-amber-400" />
              1.2k
            </span>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-8 w-8 items-center justify-center rounded-md text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700 md:hidden cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {mobileOpen && (
        <nav className="relative z-50 border-t border-slate-100 bg-white md:hidden">
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
            <div className="flex flex-col gap-1">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-4 py-3 text-sm font-medium no-underline transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
