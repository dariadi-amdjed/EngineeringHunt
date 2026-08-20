import { Link } from 'react-router-dom';
import { ArrowRight, GitFork, FileCode, Check } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CodeBlock } from '@/components/CodeBlock';

const GITHUB_REPO = 'https://github.com/user/engineeringhunt';
const GITHUB_FILE = `${GITHUB_REPO}/edit/main/src/data/websites.ts`;

const templateJson = `{
  id: 'YOUR_UNIQUE_ID',
  slug: 'your-tool-slug',
  name: 'Tool Name',
  url: 'https://example.com',
  imageUrl: 'https://example.com/favicon.ico',
  description: 'One-line description of the tool.',
  longDescription:
    'A detailed description explaining what this tool does, who it is for, and why it is useful for engineers.',
  type: 'web-app',
  category: 'electronics-circuitry',
  purposes: ['simulator'],
  pricing: 'free',
  authentication: 'no-account',
  platform: ['web'],
  difficulty: ['beginner'],
  interactivity: 'interactive-canvas',
  openSource: false,
  githubUrl: undefined,
  tags: ['Tag1', 'Tag2', 'Tag3'],
  featured: false,
}`;

const steps = [
  {
    step: 1,
    title: 'Fork the repository',
    description: 'Click the Fork button on GitHub to create your own copy of the project.',
  },
  {
    step: 2,
    title: 'Add your tool entry',
    description: 'Open src/data/websites.ts and paste the JSON template below with your tool\'s details.',
  },
  {
    step: 3,
    title: 'Submit a Pull Request',
    description: 'Commit your changes and open a PR. We\'ll review and merge it shortly.',
  },
];

export function SubmitPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6">
      <Breadcrumbs items={[{ label: 'Submit Tool' }]} />

      {/* Header */}
      <div className="mt-6">
        <span className="font-mono text-[10px] uppercase tracking-widest text-blue-600">
          [ CONTRIBUTE ]
        </span>
        <h1 className="mt-1 text-[20px] font-bold text-slate-900">
          Submit a tool via Pull Request
        </h1>
        <p className="mt-1 text-[13px] text-slate-500">
          EngineeringHunt is open source. Add a tool by submitting a PR to our GitHub repo.
        </p>
      </div>

      {/* Steps */}
      <div className="mt-8 space-y-4">
        {steps.map((s) => (
          <div key={s.step} className="flex gap-4">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-[13px] font-bold text-white">
              {s.step}
            </div>
            <div className="pt-1">
              <h3 className="text-[14px] font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-0.5 text-[13px] text-slate-500">{s.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* JSON Template */}
      <div className="mt-8">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-[14px] font-semibold text-slate-900">JSON Template</h3>
          <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
            Copy &amp; paste
          </span>
        </div>
        <CodeBlock code={templateJson} language="json" />
      </div>

      {/* CTA Buttons */}
      <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <a
          href={GITHUB_FILE}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-[13px] font-medium text-white no-underline transition-colors hover:bg-blue-700"
        >
          <GitFork className="h-4 w-4" />
          Open GitHub Editor
          <ArrowRight className="h-3.5 w-3.5" />
        </a>
        <a
          href={GITHUB_REPO}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-[13px] font-medium text-slate-700 no-underline transition-colors hover:bg-slate-50"
        >
          <FileCode className="h-4 w-4" />
          View Repository
        </a>
      </div>

      {/* Guidelines */}
      <div className="mt-10 rounded-xl border border-slate-200 bg-white p-5">
        <h3 className="mb-3 text-[14px] font-semibold text-slate-900">Submission Guidelines</h3>
        <ul className="space-y-2 text-[13px] text-slate-500">
          <li className="flex items-start gap-2">
            <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-500" />
            The tool must be related to engineering, electronics, or hardware
          </li>
          <li className="flex items-start gap-2">
            <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-500" />
            Include a valid URL and a clear, accurate description
          </li>
          <li className="flex items-start gap-2">
            <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-500" />
            Optionally include an <code className="rounded bg-slate-100 px-1 text-[12px]">imageUrl</code> for a logo or screenshot — the site favicon and preview screenshot will be fetched automatically from your URL.
          </li>
          <li className="flex items-start gap-2">
            <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-500" />
            One tool per PR for easier review
          </li>
        </ul>
      </div>

      {/* Back link */}
      <div className="mt-8 text-center">
        <Link
          to="/explore"
          className="text-[13px] font-medium text-blue-600 no-underline hover:text-blue-700"
        >
          ← Back to explore
        </Link>
      </div>
    </div>
  );
}
