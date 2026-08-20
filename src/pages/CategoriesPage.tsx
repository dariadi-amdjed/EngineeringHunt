import { CategoryCard } from '@/components/CategoryCard';
import { categories } from '@/data/categories';

export function CategoriesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
      <div className="mb-6">
        <span className="font-mono text-[10px] uppercase tracking-widest text-blue-600">
          [ CATEGORIES ]
        </span>
        <h1 className="mt-1 text-[20px] font-bold text-slate-900">All domains</h1>
        <p className="mt-1 text-[13px] text-slate-500">
          Browse {categories.length} engineering domains
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {categories.map((category) => (
          <CategoryCard key={category.slug} category={category} />
        ))}
      </div>
    </div>
  );
}
