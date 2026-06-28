import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig(() => {
  return {
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          about: resolve(__dirname, 'about.html'),
          education: resolve(__dirname, 'education.html'),
          skills: resolve(__dirname, 'skills.html'),
          projects: resolve(__dirname, 'projects.html'),
          research: resolve(__dirname, 'research.html'),
          certificates: resolve(__dirname, 'certificates.html'),
          achievements: resolve(__dirname, 'achievements.html'),
          gallery: resolve(__dirname, 'gallery.html'),
          contact: resolve(__dirname, 'contact.html'),
          error: resolve(__dirname, '404.html')
        }
      }
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
