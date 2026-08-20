import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center gap-1 text-[0.65rem] text-slate-400">
      <Link
        to="/"
        className="flex items-center gap-1 text-slate-400 no-underline transition-colors hover:text-slate-700"
      >
        <Home className="h-3 w-3" />
      </Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1">
          <ChevronRight className="h-3 w-3" />
          {item.to ? (
            <Link
              to={item.to}
              className="text-slate-400 no-underline transition-colors hover:text-slate-700"
            >
              {item.label}
            </Link>
          ) : (
            <span className="font-medium text-slate-700">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
