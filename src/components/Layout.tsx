import { useState, useCallback } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { CommandSearch } from './CommandSearch';

export function Layout() {
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleSearch = useCallback(() => {
    setSearchOpen((prev) => !prev);
  }, []);

  const closeSearch = useCallback(() => {
    setSearchOpen(false);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Navbar onSearchOpen={toggleSearch} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CommandSearch open={searchOpen} onClose={closeSearch} />
    </div>
  );
}
