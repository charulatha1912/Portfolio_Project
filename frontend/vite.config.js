// vite.config.js - Vite build tool configuration
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Dev server runs on this port
  },
})
