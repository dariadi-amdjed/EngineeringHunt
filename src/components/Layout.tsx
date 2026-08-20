import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import { PageTransition } from './PageTransition';

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>
      <Footer />
    </div>
  );
}
