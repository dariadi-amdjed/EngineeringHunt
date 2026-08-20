import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface TagProps {
  children: ReactNode;
  variant?: 'default' | 'category' | 'purpose' | 'pricing' | 'difficulty' | 'authentication' | 'interactivity';
  className?: string;
}

const variantStyles: Record<string, string> = {
  default: 'bg-slate-100 text-slate-600',
  category: 'bg-blue-50 text-blue-700',
  purpose: 'bg-violet-50 text-violet-700',
  pricing: 'bg-emerald-50 text-emerald-700',
  difficulty: 'bg-amber-50 text-amber-700',
  authentication: 'bg-cyan-50 text-cyan-700',
  interactivity: 'bg-rose-50 text-rose-700',
};

export function Tag({ children, variant = 'default', className }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md px-2 py-0.5 font-mono text-[0.55rem] uppercase tracking-wider',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
