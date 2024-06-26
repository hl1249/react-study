import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(".", "./src"),
      "~": resolve(".", "./node_modules")
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', ".less"]
  },
  server: {
    host: '0.0.0.0',
    port: 8991,
    // 是否开启 https
  },
})
