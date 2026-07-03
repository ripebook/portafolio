import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1200,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Agrupar Three.js y React Three Fiber/Drei/Postprocessing juntos
            if (
              id.includes('three') || 
              id.includes('@react-three') || 
              id.includes('postprocessing')
            ) {
              return 'three-vendor';
            }
            // Agrupar framer-motion aparte
            if (id.includes('framer-motion')) {
              return 'framer-motion';
            }
            // El resto de node_modules en vendor
            return 'vendor';
          }
        }
      }
    }
  }
})
