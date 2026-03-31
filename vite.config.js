import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  preview: {
    port: 5174,
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})
