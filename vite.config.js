import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      external: [
        'i18next-browser-languagedetector',
        // boshqa tashqi modullar agar mavjud bo'lsa
      ],
    },
  },
});
