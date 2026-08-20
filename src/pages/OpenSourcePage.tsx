import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { GithubIcon } from '@/components/GithubIcon';
import { getOpenSourceWebsites } from '@/data/websites';
import { WebsiteCard } from '@/components/WebsiteCard';

export function OpenSourcePage() {
  const openSourceWebsites = getOpenSourceWebsites();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      {/* Hero */}
      <div className="mb-10">
        <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-accent-200 bg-accent-50 px-3 py-1 text-[0.6rem] font-medium text-accent-600">
          <GithubIcon className="h-3 w-3" />
          Open Source
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-stone-900">
          Open Source Engineering Tools
        </h1>
        <p className="mt-3 max-w-2xl text-[0.75rem] leading-relaxed text-stone-500">
          Open-source tools are the backbone of modern engineering. They democratize access
          to powerful software, enable community-driven improvement, and ensure transparency
          in the tools engineers rely on daily.
        </p>
      </div>

      {/* Why it matters */}
      <section className="mb-10 rounded-2xl border border-stone-200/80 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold text-stone-900">
          Why open-source engineering resources matter
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-stone-50 p-4">
            <h3 className="mb-1 text-[0.7rem] font-semibold text-stone-900">Accessibility</h3>
            <p className="text-[0.65rem] leading-relaxed text-stone-500">
              Free tools remove financial barriers, enabling students, hobbyists, and engineers
              worldwide to learn and build.
            </p>
          </div>
          <div className="rounded-xl bg-stone-50 p-4">
            <h3 className="mb-1 text-[0.7rem] font-semibold text-stone-900">Transparency</h3>
            <p className="text-[0.65rem] leading-relaxed text-stone-500">
              Open-source code can be audited, understood, and trusted. Engineers know
              exactly what the tools they use are doing.
            </p>
          </div>
          <div className="rounded-xl bg-stone-50 p-4">
            <h3 className="mb-1 text-[0.7rem] font-semibold text-stone-900">Community</h3>
            <p className="text-[0.65rem] leading-relaxed text-stone-500">
              Open-source projects are built by communities. Bug fixes, features, and
              improvements come from the people who actually use them.
            </p>
          </div>
        </div>
      </section>

      {/* EngineeringHunt is open source */}
      <section className="mb-10 rounded-2xl border border-accent-200/50 bg-accent-50/30 p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-accent-100">
            <span className="flex h-6 w-6 items-center justify-center rounded bg-accent-500 text-[0.5rem] font-bold text-white">
              EH
            </span>
          </div>
          <div>
            <h2 className="text-[0.8rem] font-semibold text-stone-900">
              EngineeringHunt is open source
            </h2>
            <p className="mt-1 text-[0.7rem] leading-relaxed text-stone-600">
              This project itself is open-source. Engineering resources should be
              discoverable, organized, and easy to contribute to. Check out the code, contribute,
              or report issues.
            </p>
            <div className="mt-3 flex items-center gap-3">
              <a
                href="https://github.com/dariadi-amdjed/EngineeringHunt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-stone-200 bg-white px-4 py-2 text-[0.7rem] font-medium text-stone-700 no-underline shadow-sm transition-all hover:shadow-md"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                View on GitHub
              </a>
              <Link
                to="/submit"
                className="inline-flex items-center gap-1.5 text-[0.7rem] font-medium text-accent-600 no-underline hover:text-accent-700"
              >
                Submit a resource
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Open Source Websites */}
      <section>
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold text-stone-900">
              Open Source Websites
            </h2>
            <p className="mt-1 text-[0.7rem] text-stone-500">
              {openSourceWebsites.length} resources with open-source code or open-access content.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {openSourceWebsites.map((site) => (
            <WebsiteCard key={site.id} website={site} />
          ))}
        </div>
      </section>
    </div>
  );
}
