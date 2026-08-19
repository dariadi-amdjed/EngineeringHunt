import { GithubIcon } from '@/components/GithubIcon';

export function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <h1 className="text-[22px] font-bold tracking-tight text-slate-900">About</h1>
      <p className="mt-4 text-[14px] leading-relaxed text-slate-600">
        Engineering Finder is an open-source discovery platform for websites and online resources
        focused on Embedded Systems, Electronics, and Robotics.
      </p>
      <p className="mt-3 text-[14px] leading-relaxed text-slate-600">
        The goal is simple: help engineers and makers discover useful websites, tools, tutorials,
        and resources without digging through endless search results.
      </p>
      <p className="mt-3 text-[14px] leading-relaxed text-slate-600">
        Engineering Finder does not try to replace the websites it indexes. It helps users discover
        them. The core user flow is: <strong>Search → Discover → Understand → Visit</strong>.
      </p>

      <section className="mt-8 border-t border-slate-100 pt-8">
        <h2 className="mb-3 text-[15px] font-semibold text-slate-900">Contributing</h2>
        <p className="text-[13px] leading-relaxed text-slate-600">
          Engineering Finder is built by the community, for the community. Contributions are
          welcome.
        </p>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-4 py-2 text-[13px] font-medium text-slate-700 no-underline transition-colors hover:bg-slate-50"
        >
          <GithubIcon className="h-4 w-4" />
          View on GitHub
        </a>
      </section>

      <section className="mt-8 border-t border-slate-100 pt-8">
        <h2 className="mb-3 text-[15px] font-semibold text-slate-900">Technology</h2>
        <p className="text-[13px] leading-relaxed text-slate-600">
          Built with React, TypeScript, and Tailwind CSS. The frontend is designed so a backend
          can easily replace the mock data later.
        </p>
      </section>

      <section className="mt-8 border-t border-slate-100 pt-8">
        <h2 className="mb-3 text-[15px] font-semibold text-slate-900">License</h2>
        <p className="text-[13px] leading-relaxed text-slate-600">
          Open source. Available on GitHub.
        </p>
      </section>
    </div>
  );
}
