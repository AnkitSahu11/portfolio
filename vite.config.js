import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,

    allowedHosts: [
      '60qms6c1-5173.inc1.devtunnels.ms'
    ],

    hmr: {
      protocol: 'wss',
      host: '60qms6c1-5173.inc1.devtunnels.ms',
      clientPort: 443
    }
  }
})