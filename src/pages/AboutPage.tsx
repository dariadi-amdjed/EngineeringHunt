import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Rocket, Heart, Code, Globe } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <span className="font-mono text-[10px] uppercase tracking-widest text-blue-600">
        [ ABOUT ]
      </span>
      <h1 className="mt-2 text-[24px] font-bold text-slate-900">About EngineeringHunt</h1>
      <p className="mt-3 text-[14px] leading-relaxed text-slate-500">
        EngineeringHunt is a community-curated index of engineering tools, platforms, and resources.
        We help engineers, students, and makers discover the right software for their work.
      </p>

      {/* Mission */}
      <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
        <div className="mb-4 flex items-center gap-2">
          <Rocket className="h-4 w-4 text-blue-600" />
          <h2 className="text-[15px] font-semibold text-slate-900">Our Mission</h2>
        </div>
        <p className="text-[13px] leading-relaxed text-slate-600">
          The engineering software landscape is fragmented. Finding the right tool often means
          digging through forums, comparing outdated lists, or relying on word of mouth.
          EngineeringHunt brings all of these tools together in one place, organized by domain,
          purpose, and accessibility — so you can spend less time searching and more time building.
        </p>
      </div>

      {/* Values */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <Heart className="mb-3 h-5 w-5 text-blue-600" />
          <h3 className="text-[14px] font-semibold text-slate-900">Community-driven</h3>
          <p className="mt-1.5 text-[12px] leading-relaxed text-slate-500">
            Every entry is submitted and verified by the community. No paid placements, no ads.
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <Code className="mb-3 h-5 w-5 text-blue-600" />
          <h3 className="text-[14px] font-semibold text-slate-900">Open Source</h3>
          <p className="mt-1.5 text-[12px] leading-relaxed text-slate-500">
            The entire platform is open source. Contributions, feedback, and pull requests are welcome.
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <Globe className="mb-3 h-5 w-5 text-blue-600" />
          <h3 className="text-[14px] font-semibold text-slate-900">Domain Coverage</h3>
          <p className="mt-1.5 text-[12px] leading-relaxed text-slate-500">
            From electronics to AI, mechanical engineering to data science — we aim to cover every
            engineering discipline.
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <ExternalLink className="mb-3 h-5 w-5 text-blue-600" />
          <h3 className="text-[14px] font-semibold text-slate-900">Always Free</h3>
          <p className="mt-1.5 text-[12px] leading-relaxed text-slate-500">
            No sign-up required. No premium tiers. EngineeringHunt is a free resource for everyone.
          </p>
        </div>
      </div>

      {/* How it works */}
      <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="mb-4 text-[15px] font-semibold text-slate-900">How it works</h2>
        <ol className="space-y-3 text-[13px] text-slate-600">
          <li className="flex items-start gap-3">
            <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded bg-blue-100 font-mono text-[11px] font-semibold text-blue-700">
              1
            </span>
            <span>
              <strong className="font-semibold text-slate-900">Submit</strong> — Engineers submit tools and platforms they use daily.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded bg-blue-100 font-mono text-[11px] font-semibold text-blue-700">
              2
            </span>
            <span>
              <strong className="font-semibold text-slate-900">Categorize</strong> — Each tool is tagged by domain, purpose, pricing, and difficulty.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded bg-blue-100 font-mono text-[11px] font-semibold text-blue-700">
              3
            </span>
            <span>
              <strong className="font-semibold text-slate-900">Discover</strong> — Browse, search, or use AI-powered search to find the right tool.
            </span>
          </li>
        </ol>
      </div>

      {/* CTA */}
      <div className="mt-8 text-center">
        <p className="text-[13px] text-slate-500">Want to help grow the index?</p>
        <div className="mt-3 flex items-center justify-center gap-3">
          <Link
            to="/submit"
            className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-[13px] font-medium text-white no-underline transition-colors hover:bg-blue-700"
          >
            Submit a tool <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <a
            href="https://github.com/jamesvidler/engineeringhunt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-4 py-2 text-[13px] font-medium text-slate-700 no-underline transition-colors hover:bg-slate-50"
          >
            View on GitHub <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
