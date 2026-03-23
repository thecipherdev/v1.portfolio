import { useRouterState } from '@tanstack/react-router';

import { NotFoundConsole } from './NotFoundConsole';
import { NotFoundFooter } from './NotFoundFooter';
import { NotFoundHero } from './NotFoundHero';
import { NotFoundNav } from './NotFoundNav';
import { NotFoundSuggestions } from './NotFoundSuggestions';

export default function NotFound() {
  const router = useRouterState();

  return (
    <div
      className="
        min-h-screen flex flex-col
        bg-canvas font-sans text-text-primary
        relative overflow-hidden
      "
      style={{
        backgroundImage:
          'radial-gradient(rgba(0,0,0,0.07) 1.5px, transparent 1.5px)',
        backgroundSize: '24px 24px',
      }}
    >
      <NotFoundNav />
      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12 text-center">
        <NotFoundHero />
        <NotFoundConsole pathname={router.location.pathname} />
        <NotFoundSuggestions />
      </main>
      <NotFoundFooter />
    </div>
  );
}
