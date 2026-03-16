import { createFileRoute } from '@tanstack/react-router';

import { Hero } from '@components/sections/Hero';
import { Work } from '@components/sections/Work';

export const Route = createFileRoute('/')({ component: App });

function App() {
  return (
    <main>
      <Hero />
      <Work />
    </main>
  );
}
