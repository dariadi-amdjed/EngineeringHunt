import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';
import { GithubIcon } from './GithubIcon';

const footerSections = [
  {
    title: 'Navigation',
    links: [
      { to: '/explore', label: 'Explore' },
      { to: '/categories', label: 'Categories' },
      { to: '/submit', label: 'Submit Website' },
      { to: '/about', label: 'About' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { to: '/categories', label: 'All Categories' },
      { to: '/submit', label: 'Submit a Tool' },
      { to: '/about', label: 'About the Project' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-8 py-10 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 no-underline">
              <span className="flex h-6 w-6 items-center justify-center rounded bg-blue-600 text-white">
                <Zap className="h-3 w-3" strokeWidth={2.5} />
              </span>
              <span className="text-[14px] font-bold tracking-tight text-slate-900">
                EngineeringHunt
              </span>
            </Link>
            <p className="mt-3 text-[12px] leading-relaxed text-slate-500">
              Discover engineering tools, platforms, and resources. Powered by the community.
            </p>
            <a
              href="https://github.com/jamesvidler/engineeringhunt"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-medium text-slate-400 no-underline transition-colors hover:text-slate-700"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              <span>Open Source</span>
            </a>
          </div>

          {/* Link sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                {section.title}
              </h3>
              <ul className="mt-3 space-y-1.5">
                {section.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-[13px] text-slate-500 no-underline transition-colors hover:text-slate-900"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-2 border-t border-slate-200 py-4 sm:flex-row">
          <p className="text-[11px] text-slate-400">
            © {new Date().getFullYear()} EngineeringHunt. Built by engineers, for engineers.
          </p>
          <p className="text-[11px] text-slate-400">
            Made with open-source values.
          </p>
        </div>
      </div>
    </footer>
  );
}
