import { createFileRoute } from '@tanstack/react-router';

import Testimonials from '#/components/sections/Testimonials';

import Hero from '@components/sections/Hero';
import Work from '@components/sections/Work';

export const Route = createFileRoute('/')({ component: App });

function App() {
  return (
    <main>
      <Hero />
      <Work />
      <Testimonials />
    </main>
  );
}
