import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: process.env.DEPLOY_TARGET === 'github' ? '/My-AWS-hosted-CV-website/' : './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  server: {
    open: true  // Auto-open browser
  }
})