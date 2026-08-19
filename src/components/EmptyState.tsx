import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

export function EmptyState({ query }: { query?: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100">
        <Search className="h-5 w-5 text-slate-400" />
      </div>
      <h3 className="mb-1 text-[15px] font-semibold text-slate-900">No resources found</h3>
      <p className="mb-4 max-w-sm text-[13px] text-slate-500">
        Try changing your filters or searching for:
      </p>
      <div className="flex flex-wrap justify-center gap-2">
        {['ESP32', 'Arduino', 'PCB', 'Robotics'].map((suggestion) => (
          <Link
            key={suggestion}
            to={`/search?q=${encodeURIComponent(suggestion)}`}
            className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-[12px] font-medium text-slate-600 no-underline transition-colors hover:border-slate-300 hover:text-slate-900"
          >
            {suggestion}
          </Link>
        ))}
      </div>
    </div>
  );
}
