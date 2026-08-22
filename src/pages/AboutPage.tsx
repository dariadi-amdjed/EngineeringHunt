import { Link } from 'react-router-dom';
import {
  ArrowRight, ExternalLink, Rocket, Heart, Code, Globe,
  Zap, Cpu, CircuitBoard, Binary, Server, Bot, Calculator, Lightbulb,
} from 'lucide-react';
import { GithubIcon } from '@/components/GithubIcon';
import { websites } from '@/data/websites';
import { isToolOpenSource } from '@/types';

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

const openSourceCount = websites.filter((w) => isToolOpenSource(w)).length;

export function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
      <span className="font-mono text-[0.55rem] uppercase tracking-widest text-blue-600">
        [ ABOUT ]
      </span>
      <h1 className="mt-2 text-2xl font-bold text-slate-900">About EngineeringHunt</h1>
      <p className="mt-3 text-[0.75rem] leading-relaxed text-slate-500">
        EngineeringHunt is an index of engineering tools — web apps, desktop software, browser
        extensions, and command-line utilities. From electronics and embedded systems to PCB
        design, digital logic, and robotics — each tool is categorized by domain, type, and
        purpose so engineers, students, and makers can find useful tools more easily.
      </p>

      {/* Mission */}
      <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
        <div className="mb-4 flex items-center gap-2">
          <Rocket className="h-4 w-4 text-blue-600" />
          <h2 className="text-[0.8rem] font-semibold text-slate-900">Our Mission</h2>
        </div>
        <p className="text-[0.7rem] leading-relaxed text-slate-600">
          The engineering software landscape is fragmented. Finding a free circuit
          simulator, an open-source EDA tool, or a robotics simulator often
          means digging through outdated forum lists or relying on word of mouth.
          EngineeringHunt brings these tools together in one
          place — organized by domain, type, purpose, and platform — so you
          can spend less time searching and more time building.
        </p>
      </div>

      {/* Domain Coverage */}
      <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6">
        <div className="mb-4 flex items-center gap-2">
          <Globe className="h-4 w-4 text-blue-600" />
          <h2 className="text-[0.8rem] font-semibold text-slate-900">8 Core Hardware Domains</h2>
        </div>
        <p className="mb-4 text-[0.7rem] leading-relaxed text-slate-500">
          We cover eight specialized domains in hardware and low-level engineering, with dedicated
          categorization to make relevant tools easier to find.
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
                <span className="text-[0.6rem] font-medium text-slate-700 leading-tight">{domain}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Values */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <Heart className="mb-3 h-5 w-5 text-blue-600" />
          <h3 className="text-[0.75rem] font-semibold text-slate-900">Honest Descriptions</h3>
          <p className="mt-1.5 text-[0.65rem] leading-relaxed text-slate-500">
            Each tool entry includes a clear description and useful details, so you
            can understand what it offers before visiting.
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <Code className="mb-3 h-5 w-5 text-blue-600" />
          <h3 className="text-[0.75rem] font-semibold text-slate-900">Open Source</h3>
          <p className="mt-1.5 text-[0.65rem] leading-relaxed text-slate-500">
            The platform is open source. Contributions, corrections, and pull requests
            are always welcome via GitHub.
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <Zap className="mb-3 h-5 w-5 text-blue-600" />
          <h3 className="text-[0.75rem] font-semibold text-slate-900">Multi-Platform</h3>
          <p className="mt-1.5 text-[0.65rem] leading-relaxed text-slate-500">
            We cover web apps, desktop software, browser extensions, and CLI tools — not
            just browser-based tools. Find software for any platform.
          </p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <ExternalLink className="mb-3 h-5 w-5 text-blue-600" />
          <h3 className="text-[0.75rem] font-semibold text-slate-900">No Sign-Up Required</h3>
          <p className="mt-1.5 text-[0.65rem] leading-relaxed text-slate-500">
            Browse, filter, and search without creating an account. EngineeringHunt is a free,
            open resource for anyone interested in engineering tools.
          </p>
        </div>
      </div>

      {/* How it works */}
      <div className="mt-8 rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="mb-4 text-[0.8rem] font-semibold text-slate-900">How it works</h2>
        <ol className="space-y-3 text-[0.7rem] text-slate-600">
          <li className="flex items-start gap-3">
            <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded bg-blue-100 font-mono text-[0.6rem] font-semibold text-blue-700">
              1
            </span>
            <span>
              <strong className="font-semibold text-slate-900">Submit</strong> — Anyone can
              submit tools they use via a pull request on GitHub.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded bg-blue-100 font-mono text-[0.6rem] font-semibold text-blue-700">
              2
            </span>
            <span>
              <strong className="font-semibold text-slate-900">Categorize</strong> — Each tool
              is tagged by domain, type, pricing, authentication, platform, and difficulty level.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded bg-blue-100 font-mono text-[0.6rem] font-semibold text-blue-700">
              3
            </span>
            <span>
              <strong className="font-semibold text-slate-900">Discover</strong> — Browse by
              domain, filter by tool type, or use search to find the right
              simulator, EDA tool, or calculator.
            </span>
          </li>
        </ol>
      </div>

      {/* Stats */}
      <div className="mt-8 grid grid-cols-3 gap-4">
        <div className="rounded-xl border border-slate-200 bg-white p-5 text-center">
          <p className="text-2xl font-bold text-blue-600">{websites.length}</p>
          <p className="mt-1 text-[0.6rem] font-medium text-slate-500">Tools Indexed</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5 text-center">
          <p className="text-2xl font-bold text-blue-600">8</p>
          <p className="mt-1 text-[0.6rem] font-medium text-slate-500">Hardware Domains</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5 text-center">
          <p className="text-2xl font-bold text-blue-600">{openSourceCount}</p>
          <p className="mt-1 text-[0.6rem] font-medium text-slate-500">Open Source</p>
        </div>
      </div>

      {/* Creator / Founder */}
      <div className="mt-10 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3">
          <span className="font-mono text-[0.55rem] uppercase tracking-widest text-blue-100">
            Creator &amp; Founder
          </span>
        </div>
        <div className="flex flex-col items-center gap-5 p-6 sm:flex-row">
          <div className="flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full border-2 border-blue-100 bg-blue-50 text-2xl font-bold text-blue-600">
            MD
          </div>
          <div className="min-w-0 flex-1 text-center sm:text-left">
            <h3 className="text-lg font-bold text-slate-900">Mohamed Amdjed Dariadi</h3>
            <p className="text-[0.65rem] font-medium text-blue-600">Creator &amp; Developer</p>
            <p className="mt-2 text-[0.7rem] leading-relaxed text-slate-500">
              Created EngineeringHunt to make engineering tools easier to discover and explore.
            </p>
            <div className="mt-4 flex items-center justify-center gap-3 sm:justify-start">
              <a
                href="https://github.com/dariadi-amdjed"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-[0.7rem] font-medium text-white no-underline transition-colors hover:bg-slate-800"
              >
                <GithubIcon className="h-4 w-4" />
                GitHub Profile
              </a>
              <a
                href="https://www.linkedin.com/in/amdjed-dariadi/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#0a66c2] px-5 py-2.5 text-[0.7rem] font-medium text-white no-underline transition-colors hover:bg-[#004182]"
              >
                <LinkedinIcon className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-8 text-center">
        <p className="text-[0.7rem] text-slate-500">Know a great engineering tool we're missing?</p>
        <div className="mt-3 flex items-center justify-center gap-3">
          <Link
            to="/submit"
            className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-[0.7rem] font-medium text-white no-underline transition-colors hover:bg-blue-700"
          >
            Submit a tool <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <a
            href="https://github.com/dariadi-amdjed/EngineeringHunt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-4 py-2 text-[0.7rem] font-medium text-slate-700 no-underline transition-colors hover:bg-slate-50"
          >
            View on GitHub <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
