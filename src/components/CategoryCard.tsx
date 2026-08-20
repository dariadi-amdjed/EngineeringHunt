import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Category } from '@/types';

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      to={`/category/${category.slug}`}
      className="group relative flex flex-col rounded-lg border border-slate-200 bg-white p-4 no-underline transition-all hover:border-slate-300 hover:shadow-sm"
    >
      <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-[16px] transition-colors group-hover:bg-blue-50">
        {category.icon}
      </div>
      <h3 className="text-[14px] font-semibold text-slate-900 group-hover:text-blue-600">
        {category.name}
      </h3>
      <p className="mt-1 text-[12px] leading-relaxed text-slate-500 line-clamp-2">
        {category.description}
      </p>
      <div className="mt-auto flex items-center justify-between pt-3">
        <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400">
          {category.topics.length} topics
        </span>
        <ArrowRight className="h-3.5 w-3.5 text-slate-300 transition-colors group-hover:text-blue-500" />
      </div>
    </Link>
  );
}
