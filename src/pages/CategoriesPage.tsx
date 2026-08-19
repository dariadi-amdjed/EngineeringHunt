import { CategoryCard } from '@/components/CategoryCard';
import { categories } from '@/data/categories';
import { getWebsitesByCategory } from '@/data/websites';

export function CategoriesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <h1 className="text-[22px] font-bold tracking-tight text-slate-900">Categories</h1>
      <p className="mt-2 text-[14px] text-slate-500">
        Browse engineering resources by field.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {categories.map((cat) => (
          <CategoryCard
            key={cat.slug}
            category={cat}
            resourceCount={getWebsitesByCategory(cat.slug).length}
          />
        ))}
      </div>
    </div>
  );
}
