import type { ReactNode } from 'react';
import { SearchX } from 'lucide-react';

interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description: string;
  action?: ReactNode;
}

export function EmptyState({ icon, title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 px-6 py-16 text-center">
      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-400">
        {icon || <SearchX className="h-6 w-6" />}
      </div>
      <h3 className="text-[15px] font-semibold text-slate-900">{title}</h3>
      <p className="mt-1 max-w-sm text-[13px] text-slate-500">{description}</p>
      {action && <div className="mt-4">{action}</div>}
    </div>
  );
}
