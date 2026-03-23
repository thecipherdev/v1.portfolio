import { TanStackDevtools } from '@tanstack/react-devtools';
import type { QueryClient } from '@tanstack/react-query';
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';

import TanStackQueryDevtools from '../integrations/tanstack-query/devtools';
import TanStackQueryProvider from '../integrations/tanstack-query/root-provider';
import appCss from '../styles.css?url';

interface MyRouterContext {
  queryClient: QueryClient;
}

const THEME_INIT_SCRIPT = `(function(){try{var stored=window.localStorage.getItem('theme');var mode=(stored==='light'||stored==='dark'||stored==='auto')?stored:'auto';var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var resolved=mode==='auto'?(prefersDark?'dark':'light'):mode;var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(resolved);if(mode==='auto'){root.removeAttribute('data-theme')}else{root.setAttribute('data-theme',mode)}root.style.colorScheme=resolved;}catch(e){}})();`;

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        name: 'description',
        content:
          'Jomel Cadiente is a full-stack developer who builds clean, scalable web apps. Explore projects, read dev insights, and get in touch for freelance work.',
      },
      {
        title: 'Jomel Cadiente – Full-Stack Developer | Jomel Builds',
      },
      { name: 'author', content: 'Jomel' },
      {
        name: 'keywords',
        content:
          'full-stack developer, web developer, NestJS, React, portfolio, hire developer, freelance developer',
      },

      { property: 'og:type', content: 'website' },
      {
        property: 'og:title',
        content: 'Jomel Builds | Full-Stack Developer & Builder',
      },
      {
        property: 'og:description',
        content:
          'Full-stack developer building scalable web apps. Check out my projects and articles, or reach out if you want to work together.',
      },
      { property: 'og:url', content: 'https://jomelbuilds.dev' },
      {
        property: 'og:image',
        content:
          'https://res.cloudinary.com/dmoksrz9f/image/upload/v1773988100/OG_i4unu8.png',
      },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        name: 'twitter:title',
        content: 'Jomel Builds | Full-Stack Developer & Builder',
      },
      {
        name: 'twitter:description',
        content:
          'Full-stack developer building scalable web apps. Projects, articles, and freelance work.',
      },
      {
        name: 'twitter:image',
        content:
          'https://res.cloudinary.com/dmoksrz9f/image/upload/v1773763860/jomelbuilds.portfolio.png',
      },
      { name: 'twitter:creator', content: '@jomelbuilds' },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Jomel Cadiente',
          url: 'https://jomelbuilds.dev',
          jobTitle: 'Full-Stack Developer',
          sameAs: [
            'https://github.com/thecipherdev',
            'https://github.com/cadiente-jomel',
            'https://www.linkedin.com/in/jomel-cadiente/',
          ],
          description:
            'Full-stack developer specializing in clean architecture, performant interfaces, and systems that scale.',
          knowsAbout: [
            'React',
            'TypeScript',
            'NestJS',
            'Node.js',
            'Cloud Infrastructure',
          ],
          workLocation: { '@type': 'Place', name: 'Remote' },
        }),
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      { rel: 'canonical', href: 'https://jomelbuilds.dev' },
    ],
  }),
  shellComponent: RootDocument,
});

function RootDocument() {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <HeadContent />
      </head>
      <body className="antialiased [overflow-wrap:anywhere] selection:bg-[rgba(79,184,178,0.24)]">
        <TanStackQueryProvider>
          <Outlet />
          <TanStackDevtools
            config={{
              position: 'bottom-right',
            }}
            plugins={[
              {
                name: 'Tanstack Router',
                render: <TanStackRouterDevtoolsPanel />,
              },
              TanStackQueryDevtools,
            ]}
          />
        </TanStackQueryProvider>
        <Scripts />
      </body>
    </html>
  );
}
