import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves this project from a repository subpath; Vercel serves it from the domain root.
  base: process.env.VERCEL ? '/' : '/csupleo-portfolio/',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
