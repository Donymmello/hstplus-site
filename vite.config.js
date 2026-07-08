import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // ouvir em 0.0.0.0, necessário dentro do container
    port: 5173,
    strictPort: true,
    watch: {
      usePolling: true, // garante hot-reload com bind mounts (Docker Desktop / WSL)
    },
  },
})
