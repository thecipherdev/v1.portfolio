import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import { sentryTanstackStart } from "@sentry/tanstackstart-react/vite";
import tsconfigPaths from 'vite-tsconfig-paths'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import { cloudflare } from '@cloudflare/vite-plugin';

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// import { nitro } from 'nitro/vite'

const config = defineConfig({
  plugins: [
    devtools(),
    // nitro({ rollupConfig: { external: [/^@sentry\//] } }),
    cloudflare({ viteEnvironment: { name: 'ssr' } }),
    tsconfigPaths({ projects: ['./tsconfig.json'] }),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
    sentryTanstackStart({
      org: "acme-99",
      project: "javascript-tanstackstart-react",
      authToken: process.env.SENTRY_AUTH_TOKEN,
    }),
  ],
})

export default config
