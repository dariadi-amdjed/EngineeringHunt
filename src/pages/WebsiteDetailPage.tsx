import { useParams, Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/GithubIcon';
import { getWebsiteBySlug, getWebsitesByCategory } from '@/data/websites';
import { getCategoryBySlug } from '@/data/categories';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { WebsiteCard } from '@/components/WebsiteCard';
import { Tag } from '@/components/Tag';

export function WebsiteDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const website = slug ? getWebsiteBySlug(slug) : undefined;

  if (!website) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
        <h1 className="text-[18px] font-semibold text-slate-900">Website not found</h1>
        <p className="mt-2 text-[13px] text-slate-500">
          The website you're looking for doesn't exist.
        </p>
        <Link
          to="/search"
          className="mt-4 inline-block text-[13px] font-medium text-blue-600 no-underline hover:text-blue-700"
        >
          Browse all resources →
        </Link>
      </div>
    );
  }

  const primaryCategory = website.categories[0];
  const category = getCategoryBySlug(primaryCategory);
  const similarWebsites = getWebsitesByCategory(primaryCategory)
    .filter((w) => w.id !== website.id)
    .slice(0, 3);

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <Breadcrumbs
        items={[
          { label: 'Engineering Finder', to: '/' },
          { label: category?.name || primaryCategory, to: `/category/${primaryCategory}` },
          { label: website.name },
        ]}
      />

      <div className="mt-6">
        <h1 className="text-[22px] font-bold tracking-tight text-slate-900">{website.name}</h1>
        <p className="mt-2 text-[14px] leading-relaxed text-slate-500">
          {website.description}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <a
            href={website.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md bg-slate-900 px-4 py-2 text-[13px] font-medium text-white no-underline transition-colors hover:bg-slate-800"
          >
            Visit website
            <ExternalLink className="h-3.5 w-3.5" />
          </a>

          {website.githubUrl && (
            <a
              href={website.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 px-4 py-2 text-[13px] font-medium text-slate-600 no-underline transition-colors hover:bg-slate-50"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              Source
            </a>
          )}
        </div>
      </div>

      {/* What you'll find */}
      <section className="mt-10 border-t border-slate-100 pt-8">
        <h2 className="mb-3 text-[14px] font-semibold text-slate-900">What you'll find</h2>
        <ul className="list-disc space-y-1 pl-5 text-[13px] text-slate-600">
          {website.topics.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
      </section>

      {/* Categories & Topics */}
      <section className="mt-8 grid grid-cols-1 gap-6 border-t border-slate-100 pt-8 sm:grid-cols-2">
        <div>
          <h2 className="mb-3 text-[14px] font-semibold text-slate-900">Categories</h2>
          <div className="flex flex-wrap gap-2">
            {website.categories.map((cat) => (
              <Link
                key={cat}
                to={`/category/${cat}`}
                className="no-underline"
              >
                <Tag label={cat.replace(/-/g, ' ')} size="md" />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-3 text-[14px] font-semibold text-slate-900">Topics</h2>
          <div className="flex flex-wrap gap-2">
            {website.topics.map((topic) => (
              <Tag key={topic} label={topic} size="md" />
            ))}
          </div>
        </div>
      </section>

      {/* Difficulty & Best For */}
      <section className="mt-8 grid grid-cols-1 gap-6 border-t border-slate-100 pt-8 sm:grid-cols-2">
        <div>
          <h2 className="mb-3 text-[14px] font-semibold text-slate-900">Difficulty</h2>
          <p className="text-[13px] text-slate-600">
            {website.difficulty.map((d) => d.charAt(0).toUpperCase() + d.slice(1)).join(' → ')}
          </p>
        </div>

        <div>
          <h2 className="mb-3 text-[14px] font-semibold text-slate-900">Best for</h2>
          <p className="text-[13px] text-slate-600">
            {website.contentTypes
              .map((ct) => ct.charAt(0).toUpperCase() + ct.slice(1))
              .join(' and ')}
            .
          </p>
        </div>
      </section>

      {/* Long description */}
      {website.longDescription && (
        <section className="mt-8 border-t border-slate-100 pt-8">
          <h2 className="mb-3 text-[14px] font-semibold text-slate-900">About</h2>
          <p className="text-[13px] leading-relaxed text-slate-600">
            {website.longDescription}
          </p>
        </section>
      )}

      {/* Similar resources */}
      {similarWebsites.length > 0 && (
        <section className="mt-10 border-t border-slate-100 pt-8">
          <h2 className="mb-4 text-[14px] font-semibold text-slate-900">Similar resources</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {similarWebsites.map((site) => (
              <WebsiteCard key={site.id} website={site} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
