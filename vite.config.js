/* eslint-disable no-undef */
import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      '@Components': path.resolve(__dirname, './src/components'),
      '@Utils': path.resolve(__dirname, './src/utils'),
      '@Contexts': path.resolve(__dirname, './src/contexts'),
      '@Assets': path.resolve(__dirname, './src/assets'),
      '@Translations': path.resolve(__dirname, './src/translations'),
      '@Services': path.resolve(__dirname, './src/services'),
      '@Redux': path.resolve(__dirname, './src/redux'),
      '@Routes': path.resolve(__dirname, './src/routes'),
      '@Hooks': path.resolve(__dirname, './src/hooks'),
    },
  },
})
