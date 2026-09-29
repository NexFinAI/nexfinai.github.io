import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/**
 * GitHub Pages configuration
 * ------------------------------------------------------------------
 * This project is set up for an organization/user *root* site:
 *
 *   repo:  <github-org>.github.io
 *   url:   https://<github-org>.github.io/          → base: '/'  (default)
 *
 * If you ever deploy to a *project* site instead:
 *
 *   url:   https://<github-org>.github.io/<repo>/   → base: '/<repo>/'
 *
 * you can build with an env var, e.g.:  BASE_PATH=/my-repo/ npm run build
 */
export default defineConfig({
  base: process.env.BASE_PATH ?? '/',
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    reportCompressedSize: false,
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: true,
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
    allowedHosts: true,
  },
})
