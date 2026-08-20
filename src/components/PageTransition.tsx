import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    setAnimationKey((prev) => prev + 1);
  }, [location.pathname]);

  return (
    <div
      key={animationKey}
      className="animate-page-enter"
    >
      {children}
    </div>
  );
}
