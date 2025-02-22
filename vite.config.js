import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  optimizeDeps: {
    include: ['react-awesome-animated-number'],
  },
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://beta.gcli.li',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
});
