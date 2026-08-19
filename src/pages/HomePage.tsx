import { Search } from 'lucide-react';
import { SearchBar } from '@/components/SearchBar';
import { CategoryCard } from '@/components/CategoryCard';
import { WebsiteCard } from '@/components/WebsiteCard';
import { categories } from '@/data/categories';
import { websites, getFeaturedWebsites, getWebsitesByCategory } from '@/data/websites';

export function HomePage() {
  const featuredWebsites = getFeaturedWebsites();

  return (
    <div>
      {/* Hero */}
      <section className="border-b border-slate-100 bg-white px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mb-4 inline-block rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-slate-500">
            Open Source Engineering Directory
          </span>

          <h1 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Find the right engineering website.
          </h1>

          <p className="mb-8 text-[15px] leading-relaxed text-slate-500">
            Discover resources for Embedded Systems, Electronics and Robotics — without digging
            through endless search results.
          </p>

          <div className="mx-auto max-w-xl">
            <SearchBar size="large" />
          </div>

          <div className="mt-4 flex items-center justify-center gap-1.5 text-[12px] text-slate-400">
            <Search className="h-3 w-3" />
            <span>
              Try{' '}
              <span className="font-medium text-slate-500">"ESP32 beginner projects"</span>
            </span>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-2 text-[15px] font-semibold text-slate-900">Explore engineering</h2>
          <p className="mb-6 text-[13px] text-slate-500">Browse by field of interest.</p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {categories.map((cat) => (
              <CategoryCard
                key={cat.slug}
                category={cat}
                resourceCount={getWebsitesByCategory(cat.slug).length}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Websites */}
      <section className="border-t border-slate-100 bg-slate-50 px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-1 text-[15px] font-semibold text-slate-900">Featured resources</h2>
          <p className="mb-6 text-[13px] text-slate-500">Useful websites worth knowing.</p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredWebsites.slice(0, 9).map((site) => (
              <WebsiteCard key={site.id} website={site} />
            ))}
          </div>

          <div className="mt-6 text-center">
            <a
              href="/search"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-slate-500 no-underline transition-colors hover:text-slate-900"
            >
              View all {websites.length} resources →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
