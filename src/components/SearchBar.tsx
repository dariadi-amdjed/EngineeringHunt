import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

type SearchBarProps = {
  defaultValue?: string;
  size?: 'default' | 'large';
  autoFocus?: boolean;
};

export function SearchBar({ defaultValue = '', size = 'default', autoFocus = false }: SearchBarProps) {
  const [query, setQuery] = useState(defaultValue);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div
        className={
          size === 'large'
            ? 'relative'
            : 'relative'
        }
      >
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder='What are you looking for? Try "ESP32 projects"'
          autoFocus={autoFocus}
          className={`w-full border border-slate-200 bg-white py-3 pl-12 pr-24 text-[15px] text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:border-slate-300 ${
            size === 'large' ? 'rounded-lg' : 'rounded-lg'
          }`}
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md bg-slate-900 px-4 py-1.5 text-[13px] font-medium text-white transition-colors hover:bg-slate-800"
        >
          Search
        </button>
      </div>
    </form>
  );
}
