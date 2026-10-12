import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Relative paths so the build works under a GitHub Pages sub-path (/<repo>/)
  base: './',
  plugins: [react()],
})
