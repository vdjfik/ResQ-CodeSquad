import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: ".",   // make sure Vite treats this folder as root
  server: {
    port: 5173
  }
})
