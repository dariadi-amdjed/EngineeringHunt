import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Lightbulb, Cpu, CircuitBoard, Binary, Server, Bot, Calculator, type LucideIcon } from 'lucide-react';
import type { Category } from '@/types';

export const iconMap: Record<string, LucideIcon> = {
  Zap,
  Lightbulb,
  Cpu,
  CircuitBoard,
  Binary,
  Server,
  Bot,
  Calculator,
};

interface CategoryCardProps {
  category: Category;
  count?: number;
}

export function CategoryCard({ category, count }: CategoryCardProps) {
  const Icon = iconMap[category.icon] || Zap;

  return (
    <Link
      to={`/category/${category.slug}`}
      className="group relative flex flex-col rounded-lg border border-slate-200 bg-white p-4 no-underline transition-all hover:border-blue-200 hover:shadow-sm"
    >
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-slate-100 bg-slate-50 text-slate-600 shadow-sm transition-all group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-600">
        <Icon className="h-5 w-5" strokeWidth={1.5} />
      </div>
      <h3 className="text-[0.7rem] font-semibold text-slate-900 group-hover:text-blue-600">
        {category.name}
      </h3>
      <p className="mt-1 text-[0.65rem] leading-relaxed text-slate-500 line-clamp-2">
        {category.description}
      </p>
      <div className="mt-auto flex items-center justify-between pt-3">
        <span className="font-mono text-[0.6rem] uppercase tracking-wider text-slate-400">
          {count != null ? `${count} tool${count !== 1 ? 's' : ''}` : `${category.topics.length} topics`}
        </span>
        <ArrowRight className="h-3.5 w-3.5 text-slate-300 transition-colors group-hover:text-blue-500" />
      </div>
    </Link>
  );
}
