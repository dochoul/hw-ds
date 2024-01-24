// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react-swc';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import basicSsl from '@vitejs/plugin-basic-ssl';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  envDir: './env',
  server: {
    host: 'localhost',
    port: 3000, // CHANGE YOUR PORT HERE!
  },
  preview: {
    host: 'localhost',
    port: 3000, // CHANGE YOUR PORT HERE!
  },
  // plugins: [react(), tsconfigPaths(), basicSsl()],
  plugins: [react(), tsconfigPaths(), basicSsl()],
  define: {
    'process.platform': null, // you may set this to anything
  },
});
