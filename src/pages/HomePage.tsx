import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories } from '@/data/categories';
import { websites as allWebsitesData } from '@/data/websites';
import { isToolOpenSource } from '@/types';
import { heroStickers } from '@/data/stickers';
import { WebsiteCard } from '@/components/WebsiteCard';
import { CategoryCard } from '@/components/CategoryCard';
import { SearchBar } from '@/components/SearchBar';
import { FloatingStickers } from '@/components/FloatingStickers';
import { AISearchOverlay } from '@/components/AISearchOverlay';
import { SkeletonCard } from '@/components/SkeletonCard';
import { useWebsites, getCategoryCounts } from '@/lib/useWebsites';
import { Zap, Code, Cpu, GitBranch } from 'lucide-react';

const topCategories = categories.slice(0, 8);

export function HomePage() {
  const [aiQuery, setAiQuery] = useState('');
  const [aiOpen, setAiOpen] = useState(false);

  const { websites: featuredWebsites, loading } = useWebsites({ featured: true, limit: 6 });
  const categoryCounts = getCategoryCounts();

  const uniqueDomains = new Set(allWebsitesData.map((w) => w.category)).size;
  const openSourceCount = allWebsitesData.filter((w) => isToolOpenSource(w)).length;

  const stats = [
    { label: 'Tools indexed', value: allWebsitesData.length.toString(), icon: Code },
    { label: 'Domains', value: uniqueDomains.toString(), icon: Cpu },
    { label: 'Open source', value: openSourceCount.toString(), icon: GitBranch },
  ];

  const handleAISearch = (query: string) => {
    setAiQuery(query);
    setAiOpen(true);
  };

  return (
    <div>
      {/* AI Search Overlay */}
      <AISearchOverlay
        query={aiQuery}
        isOpen={aiOpen}
        onClose={() => setAiOpen(false)}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white grid-canvas">
        <FloatingStickers stickers={heroStickers} />
        <div className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-widest text-slate-300">
          [ 01 // HERO ]
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-slate-500">
            <Zap className="h-3 w-3 text-blue-600" />
            Engineering Discovery Engine
          </div>
          <h1 className="text-[28px] font-bold tracking-tight text-slate-900 sm:text-[36px]">
            Find the right tools
            <br />
            for every engineering domain
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-[14px] leading-relaxed text-slate-500">
            A curated index of web tools, desktop software, simulators, design platforms, and learning
            resources — organized by domain and purpose.
          </p>
          <div className="mx-auto mt-6 max-w-xl">
            <SearchBar variant="hero" onAISearch={handleAISearch} />
          </div>
          <div className="mt-4 flex items-center justify-center gap-4 text-[11px] text-slate-400">
            <span>Try: "free PCB design tools"</span>
            <span>·</span>
            <span>"robotics simulator"</span>
            <span>·</span>
            <span>"ML for embedded"</span>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-8 px-4 py-4 sm:px-6">
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-center gap-2 text-[12px] text-slate-500">
              <stat.icon className="h-3.5 w-3.5 text-slate-400" />
              <span className="font-semibold text-slate-900">{stat.value}</span>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Domains */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-blue-600">
              [ 02 // DOMAINS ]
            </span>
            <h2 className="mt-1 text-[18px] font-bold text-slate-900">Browse by domain</h2>
          </div>
          <Link
            to="/categories"
            className="flex items-center gap-1 text-[12px] font-medium text-blue-600 no-underline hover:text-blue-700"
          >
            All categories <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {topCategories.map((cat) => (
            <CategoryCard key={cat.slug} category={cat} count={categoryCounts[cat.slug]} />
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-blue-600">
              [ 03 // FEATURED ]
            </span>
            <h2 className="mt-1 text-[18px] font-bold text-slate-900">Featured tools</h2>
          </div>
          <Link
            to="/explore"
            className="flex items-center gap-1 text-[12px] font-medium text-blue-600 no-underline hover:text-blue-700"
          >
            View all <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
        {loading ? (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonCard key={`home-skeleton-${i}`} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {featuredWebsites.map((site) => (
              <WebsiteCard key={site.id} website={site} />
            ))}
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 text-center sm:px-6">
          <span className="font-mono text-[10px] uppercase tracking-widest text-blue-600">
            [ 04 // CONTRIBUTE ]
          </span>
          <h2 className="mt-2 text-[20px] font-bold text-slate-900">Know a tool we're missing?</h2>
          <p className="mx-auto mt-2 max-w-md text-[13px] text-slate-500">
            Submit a website to help fellow engineers discover the best tools.
          </p>
          <Link
            to="/submit"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-[13px] font-medium text-white no-underline transition-colors hover:bg-blue-700"
          >
            Submit a website
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
