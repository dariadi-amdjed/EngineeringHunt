import { useParams, Link } from 'react-router-dom';
import { getCategoryBySlug } from '@/data/categories';
import { getWebsitesByCategory } from '@/data/websites';
import { WebsiteCard } from '@/components/WebsiteCard';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { EmptyState } from '@/components/EmptyState';

export function CategoryDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const category = slug ? getCategoryBySlug(slug as never) : undefined;
  const websitesList = slug ? getWebsitesByCategory(slug) : [];

  if (!category) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
        <h1 className="text-[18px] font-semibold text-slate-900">Category not found</h1>
        <p className="mt-2 text-[13px] text-slate-500">
          This category doesn't exist.
        </p>
        <Link
          to="/categories"
          className="mt-4 inline-block text-[13px] font-medium text-blue-600 no-underline hover:text-blue-700"
        >
          Browse categories →
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
      <Breadcrumbs
        items={[
          { label: 'Engineering Finder', to: '/' },
          { label: 'Categories', to: '/categories' },
          { label: category.name },
        ]}
      />

      <div className="mt-6">
        <h1 className="text-[22px] font-bold tracking-tight text-slate-900">{category.name}</h1>
        <p className="mt-2 text-[14px] text-slate-500">{category.description}</p>
      </div>

      <div className="mt-6">
        <h2 className="mb-3 text-[13px] font-semibold text-slate-900">Popular topics</h2>
        <div className="flex flex-wrap gap-2">
          {category.topics.map((topic) => (
            <Link
              key={topic}
              to={`/search?q=${encodeURIComponent(topic)}`}
              className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[12px] font-medium text-slate-600 no-underline transition-colors hover:border-slate-300 hover:text-slate-900"
            >
              {topic}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-8 border-t border-slate-100 pt-8">
        <h2 className="mb-4 text-[14px] font-semibold text-slate-900">
          Resources ({websitesList.length})
        </h2>

        {websitesList.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {websitesList.map((site) => (
              <WebsiteCard key={site.id} website={site} />
            ))}
          </div>
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  );
}
