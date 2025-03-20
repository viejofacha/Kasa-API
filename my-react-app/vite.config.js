import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',  // 🔹 Simula el DOM para pruebas de React
    setupFiles: './src/setupTests.js',  // 🔹 Archivo de configuración de pruebas
  },
});

