import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, CircuitBoard, Bot } from 'lucide-react';
import type { Category } from '@/types';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Cpu,
  CircuitBoard,
  Bot,
};

type CategoryCardProps = {
  category: Category;
  resourceCount?: number;
};

export function CategoryCard({ category, resourceCount }: CategoryCardProps) {
  const Icon = iconMap[category.icon] || Cpu;

  return (
    <Link
      to={`/category/${category.slug}`}
      className="group flex flex-col rounded-lg border border-slate-200 bg-white p-5 no-underline transition-colors hover:border-slate-300"
    >
      <div className="mb-3 flex items-center gap-2.5">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-100">
          <Icon className="h-4 w-4 text-slate-600" />
        </div>
        <h3 className="text-[15px] font-semibold text-slate-900">{category.name}</h3>
      </div>

      <p className="mb-3 text-[13px] leading-relaxed text-slate-500">{category.description}</p>

      <div className="mb-4 flex flex-wrap gap-1.5">
        {category.topics.slice(0, 4).map((topic) => (
          <span
            key={topic}
            className="rounded bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-500"
          >
            {topic}
          </span>
        ))}
      </div>

      <div className="mt-auto flex items-center justify-between">
        {resourceCount !== undefined && (
          <span className="text-[12px] text-slate-400">
            {resourceCount} resources
          </span>
        )}
        <ArrowRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
}
