import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  preview: {
    port: 5713,
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})
