import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from 'tailwindcss';
import Sitemap from 'vite-plugin-sitemap';
import { RoutePaths } from './src/routes';

const dynamicRoutes = RoutePaths();

export default defineConfig({
  plugins: [
    react(),
    tailwindcss('./tailwind.config.js'),
    Sitemap({
      outDir: 'dist/client',
      hostname: 'https://beta.drnat.skin',
      exclude: '/client',
      dynamicRoutes: dynamicRoutes,
      generateRobotsTxt: true,
      robots: [
        {
          userAgent: '*',
          allow: dynamicRoutes,
        }
      ]
    })
  ],
})
