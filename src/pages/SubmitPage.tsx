import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, CheckCircle, ArrowRight } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { categories } from '@/data/categories';

export function SubmitPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-20 text-center sm:px-6">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
          <CheckCircle className="h-7 w-7 text-emerald-600" />
        </div>
        <h1 className="text-[20px] font-bold text-slate-900">Submission received!</h1>
        <p className="mt-2 text-[13px] text-slate-500">
          Thank you for contributing. We'll review your submission and add it to the index.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link
            to="/explore"
            className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-[13px] font-medium text-white no-underline hover:bg-blue-700"
          >
            Explore tools <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <button
            onClick={() => setSubmitted(false)}
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-4 py-2 text-[13px] font-medium text-slate-700 cursor-pointer hover:bg-slate-50"
          >
            Submit another
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6">
      <Breadcrumbs items={[{ label: 'Submit Website' }]} />

      <div className="mt-6">
        <span className="font-mono text-[10px] uppercase tracking-widest text-blue-600">
          [ SUBMIT ]
        </span>
        <h1 className="mt-1 text-[20px] font-bold text-slate-900">Submit a website</h1>
        <p className="mt-1 text-[13px] text-slate-500">
          Help fellow engineers discover great tools.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        {/* Name */}
        <div>
          <label className="mb-1.5 block text-[12px] font-semibold text-slate-700">
            Website Name *
          </label>
          <input
            type="text"
            required
            placeholder="e.g. KiCad, Wokwi, Hugging Face"
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-[13px] text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* URL */}
        <div>
          <label className="mb-1.5 block text-[12px] font-semibold text-slate-700">
            Website URL *
          </label>
          <input
            type="url"
            required
            placeholder="https://example.com"
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-[13px] text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Tagline */}
        <div>
          <label className="mb-1.5 block text-[12px] font-semibold text-slate-700">
            Short description *
          </label>
          <input
            type="text"
            required
            placeholder="One-line description of the tool"
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-[13px] text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Description */}
        <div>
          <label className="mb-1.5 block text-[12px] font-semibold text-slate-700">
            Detailed description *
          </label>
          <textarea
            required
            rows={4}
            placeholder="What does this tool do? What makes it useful?"
            className="w-full resize-none rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-[13px] text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Category */}
        <div>
          <label className="mb-1.5 block text-[12px] font-semibold text-slate-700">
            Primary Category *
          </label>
          <select
            required
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-[13px] text-slate-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="">Select a category</option>
            {categories.map((cat) => (
              <option key={cat.slug} value={cat.slug}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        {/* Purpose */}
        <div>
          <label className="mb-1.5 block text-[12px] font-semibold text-slate-700">
            Purpose
          </label>
          <select className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-[13px] text-slate-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
            <option value="">Select purpose</option>
            <option value="simulation">Simulation</option>
            <option value="design">Design</option>
            <option value="learning">Learning</option>
            <option value="monitoring">Monitoring</option>
            <option value="automation">Automation</option>
            <option value="analysis">Analysis</option>
            <option value="programming">Programming</option>
            <option value="visualization">Visualization</option>
            <option value="data">Data</option>
            <option value="development">Development</option>
          </select>
        </div>

        {/* Pricing */}
        <div>
          <label className="mb-1.5 block text-[12px] font-semibold text-slate-700">Pricing</label>
          <div className="flex flex-wrap gap-2">
            {(['free', 'freemium', 'paid'] as const).map((option) => (
              <label
                key={option}
                className="flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-[12px] text-slate-600 transition-colors hover:border-slate-300 has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50 has-[:checked]:text-blue-700"
              >
                <input type="radio" name="pricing" value={option} className="sr-only" />
                {option}
              </label>
            ))}
          </div>
        </div>

        {/* Open source */}
        <div>
          <label className="flex cursor-pointer items-center gap-2 text-[13px] text-slate-700">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
            />
            This tool is open source
          </label>
        </div>

        {/* Submit */}
        <div className="flex items-center gap-3 pt-2">
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-[13px] font-medium text-white transition-colors hover:bg-blue-700 cursor-pointer"
          >
            <Send className="h-3.5 w-3.5" />
            Submit for review
          </button>
          <span className="text-[11px] text-slate-400">We'll review within 48 hours</span>
        </div>
      </form>
    </div>
  );
}
