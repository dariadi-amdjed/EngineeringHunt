export function SkeletonCard() {
  return (
    <div className="animate-skeleton rounded-lg border border-slate-200 bg-white p-4">
      {/* Header */}
      <div className="mb-3 flex items-start justify-between">
        <div className="flex-1">
          <div className="mb-1.5 h-4 w-32 rounded bg-slate-100" />
          <div className="h-3 w-24 rounded bg-slate-100" />
        </div>
        <div className="flex gap-1">
          <div className="h-7 w-7 rounded-md bg-slate-100" />
          <div className="h-7 w-7 rounded-md bg-slate-100" />
        </div>
      </div>

      {/* Description */}
      <div className="mb-3 space-y-1.5">
        <div className="h-3 w-full rounded bg-slate-100" />
        <div className="h-3 w-3/4 rounded bg-slate-100" />
      </div>

      {/* Tags */}
      <div className="mb-3 flex gap-1.5">
        <div className="h-5 w-16 rounded bg-slate-100" />
        <div className="h-5 w-12 rounded bg-slate-100" />
        <div className="h-5 w-14 rounded bg-slate-100" />
      </div>

      {/* Footer */}
      <div className="flex items-center border-t border-slate-100 pt-2.5">
        <div className="h-3 w-16 rounded bg-slate-100" />
        <div className="ml-auto h-3 w-12 rounded bg-slate-100" />
      </div>
    </div>
  );
}
