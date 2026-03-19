import { createFileRoute } from '@tanstack/react-router';

import Blog from '#/components/sections/Blog';
import Contact from '#/components/sections/Contact';
import Experience from '#/components/sections/Experience';
import Testimonials from '#/components/sections/Testimonials';

import Hero from '@components/sections/Hero';
import TechStack from '@components/sections/TechStack';
import Work from '@components/sections/Work';

export const Route = createFileRoute('/')({ component: App });

function App() {
  return (
    <main>
      <Hero />
      <Experience />
      <TechStack />
      <Work />
      <Testimonials />
      <Blog />
      <Contact />
    </main>
  );
}
