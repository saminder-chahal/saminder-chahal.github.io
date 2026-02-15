import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/saminder-chahal.github.io/",
  build: {
    outDir: 'dist'
  }
})
