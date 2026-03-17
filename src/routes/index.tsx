import { createFileRoute } from '@tanstack/react-router';

import Blog from '#/components/sections/Blog';
import Contact from '#/components/sections/Contact';
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
      <Blog />
      <Contact />
    </main>
  );
}
