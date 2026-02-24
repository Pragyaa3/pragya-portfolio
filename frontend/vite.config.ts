import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: [
      'all',
      '.trycloudflare.com',
      'approaches-explicitly-had-includes.trycloudflare.com'
    ]
  }
})