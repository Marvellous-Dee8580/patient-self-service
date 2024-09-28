import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Self-Service-App/',
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['framer-motion'], // Add framer-motion to external dependencies
    }
  }
});
