import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss('./tailwind.config.js')],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          return id.includes('node_modules') ? id.toString().split('node_modules/')[1].split('/')[0].toString() : 'vendor';
        }
      }
    }
  }
})
