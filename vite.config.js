import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/learning-spanish/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        dashboard: resolve(__dirname, 'dashboard.html'),
        module: resolve(__dirname, 'module.html'),
        lesson: resolve(__dirname, 'lesson.html'),
        reference: resolve(__dirname, 'reference.html'),
      },
    },
  },
})
