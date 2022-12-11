import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import gql from 'vite-plugin-simple-gql';
console.log(gql)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), gql.default()],
  server: {
    port: 3030
  },
  preview: {
    port: 8080
  }
})
