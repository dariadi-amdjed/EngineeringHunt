import { useState, useCallback } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language = 'json' }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [code]);

  return (
    <div className="group/code relative overflow-hidden rounded-xl border border-slate-700/50 bg-[#0d1117]">
      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-slate-700/50 bg-[#161b22] px-4 py-2">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <span className="ml-2 font-mono text-[11px] text-slate-500">{language}</span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded-md border border-slate-700/50 bg-slate-800 px-2.5 py-1 text-[11px] font-medium text-slate-400 opacity-0 transition-all hover:border-slate-600 hover:bg-slate-700 hover:text-slate-300 group-hover/code:opacity-100 cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="h-3 w-3 text-emerald-400" />
              <span className="text-emerald-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-3 w-3" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      {/* Code body */}
      <pre className="overflow-x-auto px-5 py-4 text-[13px] leading-[1.7] text-slate-300">
        <code>{code}</code>
      </pre>
    </div>
  );
}
