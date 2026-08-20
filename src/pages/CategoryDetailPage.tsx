import { useParams, Link } from 'react-router-dom';
import { Zap } from 'lucide-react';
import { categories } from '@/data/categories';
import { getWebsitesByDomain } from '@/lib/useWebsites';
import { iconMap } from '@/components/CategoryCard';
import { WebsiteCard } from '@/components/WebsiteCard';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { EmptyState } from '@/components/EmptyState';

export function CategoryDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const category = categories.find((c) => c.slug === slug);
  const CategoryIcon = category ? (iconMap[category.icon] || Zap) : Zap;
  const websites = slug ? getWebsitesByDomain(slug) : [];

  if (!category) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
        <p className="font-mono text-[0.65rem] uppercase tracking-widest text-slate-400">404</p>
        <h1 className="mt-3 text-xl font-bold text-slate-900">Category not found</h1>
        <p className="mt-2 text-[0.7rem] text-slate-500">
          The category you're looking for doesn't exist.
        </p>
        <Link
          to="/categories"
          className="mt-4 inline-block text-[0.7rem] font-medium text-blue-600 no-underline hover:text-blue-700"
        >
          ← Browse categories
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6">
      <Breadcrumbs
        items={[
          { label: 'Categories', to: '/categories' },
          { label: category.name },
        ]}
      />

      {/* Header */}
      <div className="mt-6 mb-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
            <CategoryIcon className="h-5 w-5" strokeWidth={1.5} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-900">{category.name}</h1>
            <p className="text-[0.7rem] text-slate-500">{category.description}</p>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-4 text-[0.65rem] text-slate-400">
          <span className="font-mono uppercase tracking-wider">
            {websites.length} tool{websites.length !== 1 ? 's' : ''}
          </span>
        </div>
      </div>

      {/* Websites */}
      {websites.length > 0 ? (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {websites.map((website) => (
            <WebsiteCard key={website.slug} website={website} />
          ))}
        </div>
      ) : (
        <EmptyState
          title="No tools in this category yet"
          description="Check back soon or submit a tool."
          action={
            <Link
              to="/submit"
              className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-[0.65rem] font-medium text-white no-underline hover:bg-blue-700"
            >
              Submit a tool
            </Link>
          }
        />
      )}
    </div>
  );
}
