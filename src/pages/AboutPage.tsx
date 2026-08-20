import { Link } from 'react-router-dom';
import {
  ArrowRight, ExternalLink, Rocket, Heart, Code, Globe,
  Zap, Cpu, CircuitBoard, Binary, Server, Bot, Calculator, Lightbulb,
} from 'lucide-react';
import { GithubIcon } from '@/components/GithubIcon';

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const domainIcons: Record<string, React.ElementType> = {
  'Electronics & Circuitry': Zap,
  'Electrical & Power Engineering': Lightbulb,
  'Embedded Systems & IoT': Cpu,
  'PCB Design & EDA': CircuitBoard,
  'Digital Logic & Hardware Description': Binary,
  'Computer Architecture & Chips': Server,
  'Robotics & Control Systems': Bot,
  'Calculators & Technical Reference': Calculator,
};

const domains = [
  'Electronics & Circuitry',
  'Electrical & Power Engineering',
  'Embedded Systems & IoT',
  'PCB Design & EDA',
  'Digital Logic & Hardware Description',
  'Computer Architecture & Chips',
  'Robotics & Control Systems',
  'Calculators & Technical Reference',
];

export function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <span className="font-mono text-[10px] uppercase tracking-widest text-blue-600">
        [ ABOUT ]
      </span>
      <h1 className="mt-2 text-[24px] font-bold text-slate-900">About EngineeringHunt</h1>
      <p className="mt-3 text-[14px] leading-relaxed text-slate-500">
        EngineeringHunt is a community-curated index of web-based hardware &amp; computer
        engineering tools. From electronics and embedded systems to PCB design, digital logic,
        and computer architecture — we focus strictly on tools you can run in a browser,
        helping engineers, students, and makers find the right simulator or EDA platform fast.
      </p>

      {/* Mission */}
      <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
        <div className="mb-4 flex items-center gap-2">
          <Rocket className="h-4 w-4 text-blue-600" />
          <h2 className="text-[15px] font-semibold text-slate-900">Our Mission</h2>
        </div>
        <p className="text-[13px] leading-relaxed text-slate-600">
          The hardware engineering software landscape is fragmented. Finding a free circuit
          simulator, an open-source EDA tool, or an interactive Verilog playground often
          means digging through outdated Reddit threads, comparing decade-old forum lists,
          or relying on word of mouth. EngineeringHunt brings these tools together in one
          place — organized by domain, purpose, authentication, and interactivity — so you
          can spend less time searching and more time building hardware.
        </p>
      </div>

      {/* Domain Coverage */}
      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
        <div className="mb-4 flex items-center gap-2">
          <Globe className="h-4 w-4 text-blue-600" />
          <h2 className="text-[15px] font-semibold text-slate-900">8 Core Hardware Domains</h2>
        </div>
        <p className="mb-4 text-[13px] leading-relaxed text-slate-500">
          We cover eight specialized domains in hardware &amp; low-level engineering — each with
          dedicated tool categorization, so results are always relevant to your discipline.
        </p>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {domains.map((domain) => {
            const Icon = domainIcons[domain] || Zap;
            return (
              <div
                key={domain}
                className="flex items-center gap-2 rounded-lg border border-slate-100 bg-slate-50 px-3 py-2"
              >
                <Icon className="h-3.5 w-3.5 flex-shrink-0 text-blue-600" />
                <span className="text-[11px] font-medium text-slate-700 leading-tight">{domain}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Values */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <Heart className="mb-3 h-5 w-5 text-blue-600" />
          <h3 className="text-[14px] font-semibold text-slate-900">Community-driven</h3>
          <p className="mt-1.5 text-[12px] leading-relaxed text-slate-500">
            Every entry is submitted and verified by hardware engineers and students. No paid
            placements, no ads, no SEO-driven rankings.
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <Code className="mb-3 h-5 w-5 text-blue-600" />
          <h3 className="text-[14px] font-semibold text-slate-900">Open Source</h3>
          <p className="mt-1.5 text-[12px] leading-relaxed text-slate-500">
            The entire platform is open source. Contributions, corrections, and pull requests
            from the hardware community are always welcome.
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <Zap className="mb-3 h-5 w-5 text-blue-600" />
          <h3 className="text-[14px] font-semibold text-slate-900">Interactive Tools First</h3>
          <p className="mt-1.5 text-[12px] leading-relaxed text-slate-500">
            We prioritize web-based simulators, live EDA tools, and interactive calculators
            you can use instantly — no installs, no licenses.
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <ExternalLink className="mb-3 h-5 w-5 text-blue-600" />
          <h3 className="text-[14px] font-semibold text-slate-900">Always Free</h3>
          <p className="mt-1.5 text-[12px] leading-relaxed text-slate-500">
            No sign-up required. No premium tiers. EngineeringHunt is a free, open resource
            for the entire hardware engineering community.
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
              <strong className="font-semibold text-slate-900">Submit</strong> — Engineers
              submit the web-based tools and platforms they use daily for hardware design,
              simulation, and prototyping.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded bg-blue-100 font-mono text-[11px] font-semibold text-blue-700">
              2
            </span>
            <span>
              <strong className="font-semibold text-slate-900">Categorize</strong> — Each tool
              is tagged by hardware domain, tool type, pricing, authentication requirements,
              interactivity level, and experience level.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded bg-blue-100 font-mono text-[11px] font-semibold text-blue-700">
              3
            </span>
            <span>
              <strong className="font-semibold text-slate-900">Discover</strong> — Browse by
              domain, filter by tool type, or use AI-powered search to instantly find the right
              simulator, EDA tool, or calculator.
            </span>
          </li>
        </ol>
      </div>

      {/* Stats */}
      <div className="mt-8 grid grid-cols-3 gap-4">
        <div className="rounded-xl border border-slate-200 bg-white p-5 text-center">
          <p className="text-[22px] font-bold text-blue-600">8</p>
          <p className="mt-1 text-[11px] font-medium text-slate-500">Hardware Domains</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5 text-center">
          <p className="text-[22px] font-bold text-blue-600">6</p>
          <p className="mt-1 text-[11px] font-medium text-slate-500">Tool Categories</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5 text-center">
          <p className="text-[22px] font-bold text-blue-600">100%</p>
          <p className="mt-1 text-[11px] font-medium text-slate-500">Web-based Tools</p>
        </div>
      </div>

      {/* Creator / Founder */}
      <div className="mt-10 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3">
          <span className="font-mono text-[10px] uppercase tracking-widest text-blue-100">
            Creator &amp; Founder
          </span>
        </div>
        <div className="flex flex-col items-center gap-5 p-6 sm:flex-row">
          <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full border-2 border-blue-100 bg-blue-50 text-[24px] font-bold text-blue-600">
            JV
          </div>
          <div className="min-w-0 flex-1 text-center sm:text-left">
            <h3 className="text-[17px] font-bold text-slate-900">James Vidler</h3>
            <p className="text-[12px] font-medium text-blue-600">Creator &amp; Lead Architect</p>
            <p className="mt-2 text-[13px] leading-relaxed text-slate-500">
              Hardware engineer and full-stack developer passionate about making engineering tools
              more discoverable. Built EngineeringHunt to solve the fragmented tool discovery
              problem in the hardware engineering community.
            </p>
            <div className="mt-4 flex items-center justify-center gap-3 sm:justify-start">
              <a
                href="https://github.com/jamesvidler"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-[13px] font-medium text-white no-underline transition-colors hover:bg-slate-800"
              >
                <GithubIcon className="h-4 w-4" />
                GitHub Profile
              </a>
              <a
                href="https://linkedin.com/in/jamesvidler"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-2.5 text-[13px] font-medium text-slate-700 no-underline transition-colors hover:bg-slate-50"
              >
                <LinkedinIcon className="h-4 w-4 text-[#0A66C2]" />
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Community Contributors */}
      <div className="mt-8">
        <div className="mb-4">
          <h2 className="text-[15px] font-semibold text-slate-900">Community Contributors</h2>
          <p className="mt-1 text-[12px] text-slate-500">
            The people who make EngineeringHunt better every day.
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {/* Core contributors */}
            {[
              { name: 'jamesvidler', displayName: 'James Vidler', tag: 'Creator', color: 'bg-blue-600' },
              { name: 'contributor-1', displayName: 'Alex Chen', tag: 'Core Contributor', color: 'bg-emerald-600' },
              { name: 'contributor-2', displayName: 'Sarah Kim', tag: 'Data Curation', color: 'bg-violet-600' },
              { name: 'contributor-3', displayName: 'Marcus Dev', tag: 'Core Contributor', color: 'bg-amber-600' },
              { name: 'contributor-4', displayName: 'Lin Wei', tag: 'Data Curation', color: 'bg-rose-600' },
              { name: 'contributor-5', displayName: 'Priya Patel', tag: 'Documentation', color: 'bg-cyan-600' },
            ].map((contributor) => (
              <a
                key={contributor.name}
                href={`https://github.com/${contributor.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-lg border border-slate-100 p-3 no-underline transition-all hover:border-slate-200 hover:shadow-sm"
              >
                <div
                  className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-[12px] font-bold text-white ${contributor.color}`}
                >
                  {contributor.displayName.split(' ').map((n) => n[0]).join('')}
                </div>
                <div className="min-w-0">
                  <p className="truncate text-[12px] font-semibold text-slate-900 group-hover:text-blue-600">
                    {contributor.displayName}
                  </p>
                  <p className="truncate text-[10px] text-slate-400">@{contributor.name}</p>
                  <span className="mt-0.5 inline-block rounded bg-slate-100 px-1.5 py-0.5 text-[9px] font-medium text-slate-600">
                    {contributor.tag}
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-4 flex justify-center">
            <a
              href="https://github.com/jamesvidler/engineeringhunt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-[11px] font-medium text-slate-600 no-underline transition-colors hover:bg-slate-100"
            >
              <GithubIcon className="h-3 w-3" />
              Want to contribute? View on GitHub
            </a>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-8 text-center">
        <p className="text-[13px] text-slate-500">Know a great hardware engineering tool we're missing?</p>
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
