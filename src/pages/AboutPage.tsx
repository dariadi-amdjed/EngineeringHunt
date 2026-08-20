import { Link } from 'react-router-dom';
import {
  ArrowRight, ExternalLink, Rocket, Heart, Code, Globe,
  Zap, Cpu, CircuitBoard, Binary, Server, Bot, Calculator, Lightbulb,
} from 'lucide-react';

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
