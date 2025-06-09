import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/DELEON-ASESORIAS/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react']
  }
})

