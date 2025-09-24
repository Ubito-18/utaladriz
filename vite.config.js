import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/', // Reemplazar con el nombre del repositorio
  server: {
    // Configuración para desarrollo - redirige todas las rutas a index.html
    historyApiFallback: true,
  },
  preview: {
    // Configuración para preview - también necesario para el comando vite preview
    historyApiFallback: true,
  }
});
