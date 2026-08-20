import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { HomePage } from '@/pages/HomePage';
import { ExplorePage } from '@/pages/ExplorePage';
import { WebsiteDetailPage } from '@/pages/WebsiteDetailPage';
import { CategoriesPage } from '@/pages/CategoriesPage';
import { CategoryDetailPage } from '@/pages/CategoryDetailPage';
import { SubmitPage } from '@/pages/SubmitPage';
import { AboutPage } from '@/pages/AboutPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/website/:slug" element={<WebsiteDetailPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/category/:slug" element={<CategoryDetailPage />} />
          <Route path="/submit" element={<SubmitPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/search" element={<ExplorePage />} />
          <Route
            path="*"
            element={
              <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
                <p className="font-mono text-[12px] uppercase tracking-widest text-slate-400">404</p>
                <h1 className="mt-3 text-[20px] font-bold text-slate-900">Page not found</h1>
                <p className="mt-2 text-[13px] text-slate-500">
                  The page you're looking for doesn't exist.
                </p>
                <a
                  href="/"
                  className="mt-4 inline-block text-[13px] font-medium text-blue-600 no-underline hover:text-blue-700"
                >
                  Go home →
                </a>
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
