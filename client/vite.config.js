import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    proxy: {
      '/users/login': {
        target: 'http://localhost:8888',
        secure: false,
        ws: true,
      },
      '/users': {
        target: 'http://localhost:8888',
        secure: false,
        ws: true,
      }
    },
  }
})
