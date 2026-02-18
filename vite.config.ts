import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',  // Changed to './' for relative paths
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  server: {
    open: true  // Auto-open browser
  }
})