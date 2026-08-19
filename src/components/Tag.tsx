import { cn } from '@/lib/utils';

type TagProps = {
  label: string;
  size?: 'sm' | 'md';
  active?: boolean;
  onClick?: () => void;
};

export function Tag({ label, size = 'sm', active = false, onClick }: TagProps) {
  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={cn(
          'inline-flex items-center rounded font-medium transition-colors',
          size === 'sm' ? 'px-2 py-0.5 text-[11px]' : 'px-2.5 py-1 text-[12px]',
          active
            ? 'border border-blue-200 bg-blue-50 text-blue-700'
            : 'border border-slate-200 bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-700'
        )}
      >
        {label}
      </button>
    );
  }

  return (
    <span
      className={cn(
        'inline-flex items-center rounded bg-slate-100 font-medium text-slate-600',
        size === 'sm' ? 'px-2 py-0.5 text-[11px]' : 'px-2.5 py-1 text-[12px]'
      )}
    >
      {label}
    </span>
  );
}
