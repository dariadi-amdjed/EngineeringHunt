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
      {/* Blue background — slides in from left on page load */}
      <div className="absolute left-0 top-0 bottom-0 animate-nav-blue-slide-in">
        <div
          className="absolute inset-0 w-56 bg-[#2563EB]"
          style={{ clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0 100%)' }}
        />
        <div
          className="absolute inset-0"
          style={{
            width: 'calc(14rem + 24px)',
            clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0 100%)',
            filter: 'blur(12px)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 60%, black 80%)',
            maskImage: 'linear-gradient(to right, transparent 60%, black 80%)',
          }}
        />
      </div>

      <nav className="relative mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link to="/" className="no-underline relative z-10 leading-none select-none">
          <span className="block text-[18px] font-black leading-none text-white tracking-tight">
            Eng
          </span>
          <span
            className="block text-[13px] font-extrabold leading-none text-white/70 -mt-0.5"
            style={{
              WebkitTextStroke: '0.5px rgba(255,255,255,0.5)',
              letterSpacing: '0.04em',
            }}
          >
            Hunt
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
          <a
            href="https://github.com/jamesvidler/engineeringhunt"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[12px] font-medium text-slate-700 no-underline transition-colors hover:border-slate-300 hover:bg-slate-50 sm:flex"
          >
            <GithubIcon className="h-3.5 w-3.5 text-slate-600" />
            <span>Star on GitHub</span>
            <span className="ml-0.5 flex items-center gap-0.5 rounded-full bg-amber-50 px-1.5 py-0.5 text-[10px] font-bold text-amber-700">
              <Star className="h-2.5 w-2.5 fill-amber-400 text-amber-400" />
              1.2k
            </span>
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
