import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/PC-Wiki/',
  preview: {
    port: 5174,
    allowedHosts: ['www.marzweb.win'],
  },
  plugins: [
    react(),
    tailwindcss(),
  ],
})
