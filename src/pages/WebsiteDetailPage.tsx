import { useParams, Link } from 'react-router-dom';
import {
  ArrowUpRight, Globe, Monitor, Smartphone, Tag as TagIcon, Camera,
} from 'lucide-react';
import { getWebsiteBySlug, getWebsitesByDomain } from '@/lib/useWebsites';
import { isToolOpenSource } from '@/types';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { SiteFavicon } from '@/components/SiteFavicon';
import { SiteScreenshot } from '@/components/SiteScreenshot';
import { Tag } from '@/components/Tag';
import { WebsiteCard } from '@/components/WebsiteCard';

function categoryLabel(slug: string): string {
  return slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .replace(/Iot/g, 'IoT')
    .replace(/Eda/g, 'EDA')
    .replace(/Hdl/g, 'HDL');
}

const purposeLabels: Record<string, string> = {
  'simulator': 'Simulator',
  'eda-tool': 'EDA Tool',
  'calculator': 'Calculator',
  'datasheet-reference': 'Datasheet / Reference',
  'community-docs': 'Community & Docs',
};

const authLabels: Record<string, string> = {
  'no-account': 'No Account Needed',
  'optional-signup': 'Optional Sign-up',
  'signup-required': 'Sign-up Required',
};

const interactivityLabels: Record<string, string> = {
  'interactive-canvas': 'Interactive / Live Canvas',
  'input-output-tool': 'Input / Output Tool',
  'static-document': 'Static Document',
};

export function WebsiteDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const website = slug ? getWebsiteBySlug(slug) : undefined;

  if (!website) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
        <p className="font-mono text-[12px] uppercase tracking-widest text-slate-400">404</p>
        <h1 className="mt-3 text-[20px] font-bold text-slate-900">Website not found</h1>
        <p className="mt-2 text-[13px] text-slate-500">
          The website you're looking for doesn't exist.
        </p>
        <Link
          to="/explore"
          className="mt-4 inline-block text-[13px] font-medium text-blue-600 no-underline hover:text-blue-700"
        >
          ← Back to explore
        </Link>
      </div>
    );
  }

  const relatedWebsites = getWebsitesByDomain(website.category)
    .filter((w) => w.slug !== website.slug)
    .slice(0, 3);

  const platformIcons: Record<string, React.ReactNode> = {
    web: <Globe className="h-3 w-3" />,
    desktop: <Monitor className="h-3 w-3" />,
    mobile: <Smartphone className="h-3 w-3" />,
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6">
      <Breadcrumbs
        items={[
          { label: 'Explore', to: '/explore' },
          { label: website.name },
        ]}
      />

      {/* Header */}
      <div className="mt-6 flex items-start gap-4">
        <SiteFavicon url={website.url} name={website.name} size="lg" />
        <div className="flex-1">
          <h1 className="text-[22px] font-bold text-slate-900">{website.name}</h1>
          <p className="mt-1 text-[14px] text-slate-500">{website.description}</p>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <Tag variant="category">{categoryLabel(website.category)}</Tag>
            {website.purposes.map((p) => (
              <Tag key={p} variant="purpose">{purposeLabels[p] || p}</Tag>
            ))}
            <Tag variant="pricing">{website.pricing.replace('-', ' ')}</Tag>
            {isToolOpenSource(website) && <Tag variant="pricing">Open Source</Tag>}
            <Tag variant="authentication">{authLabels[website.authentication]}</Tag>
            <Tag variant="interactivity">{interactivityLabels[website.interactivity]}</Tag>
          </div>
        </div>
        <a
          href={website.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-[13px] font-medium text-white no-underline transition-colors hover:bg-blue-700"
        >
          Visit Website
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>

      {/* Content grid */}
      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Main */}
        <div className="lg:col-span-2 space-y-6">
          {/* Description */}
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h2 className="mb-3 text-[14px] font-semibold text-slate-900">About</h2>
            <p className="text-[13px] leading-relaxed text-slate-600">{website.longDescription}</p>
          </div>

          {/* Screenshot Preview */}
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <div className="mb-3 flex items-center gap-2">
              <Camera className="h-4 w-4 text-slate-400" strokeWidth={1.5} />
              <h2 className="text-[14px] font-semibold text-slate-900">Live Preview</h2>
            </div>
            <SiteScreenshot url={website.url} name={website.name} />
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* Meta */}
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="mb-3 text-[12px] font-semibold uppercase tracking-wider text-slate-400">
              Details
            </h3>
            <dl className="space-y-3 text-[13px]">
              <div className="flex items-center justify-between">
                <dt className="text-slate-500">Pricing</dt>
                <dd className="font-medium capitalize text-slate-900">{website.pricing.replace('-', ' ')}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-slate-500">Difficulty</dt>
                <dd className="font-medium capitalize text-slate-900">{website.difficulty.join(', ')}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-slate-500">Authentication</dt>
                <dd className="font-medium text-slate-900">{authLabels[website.authentication]}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-slate-500">Interactivity</dt>
                <dd className="font-medium text-slate-900">{interactivityLabels[website.interactivity]}</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-slate-500">Platform</dt>
                <dd className="flex items-center gap-1.5">
                  {website.platform.map((p) => (
                    <span key={p} className="flex items-center gap-1 text-slate-600">
                      {platformIcons[p] || <Globe className="h-3 w-3" />}
                      {p}
                    </span>
                  ))}
                </dd>
              </div>
              {isToolOpenSource(website) && website.githubUrl && (
                <div className="flex items-center justify-between">
                  <dt className="text-slate-500">Source</dt>
                  <dd>
                    <a
                      href={website.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-600 hover:text-blue-700"
                    >
                      GitHub <ArrowUpRight className="h-3 w-3" />
                    </a>
                  </dd>
                </div>
              )}
            </dl>
          </div>

          {/* Category */}
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="mb-3 text-[12px] font-semibold uppercase tracking-wider text-slate-400">
              Category
            </h3>
            <Link
              to={`/category/${website.category}`}
              className="inline-block rounded-md bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-600 no-underline transition-colors hover:bg-slate-200"
            >
              {categoryLabel(website.category)}
            </Link>
          </div>

          {/* Tags */}
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="mb-3 text-[12px] font-semibold uppercase tracking-wider text-slate-400">
              Tags
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {website.tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1 rounded-md bg-slate-100 px-2 py-1 text-[11px] text-slate-500"
                >
                  <TagIcon className="h-2.5 w-2.5" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      {relatedWebsites.length > 0 && (
        <div className="mt-10">
          <h2 className="mb-4 text-[16px] font-bold text-slate-900">Related tools</h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {relatedWebsites.map((w) => (
              <WebsiteCard key={w.slug} website={w} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
