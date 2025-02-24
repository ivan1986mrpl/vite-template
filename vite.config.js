import Inspect from 'vite-plugin-inspect';//https://github.com/antfu-collective/vite-plugin-inspect
import Path from 'path';//для псевдонимов путей
import { resolve } from 'path';//для многостраничной сборки

console.log(Path.resolve(__dirname, './src/assets'));

export default {
  plugins: [
    Inspect(),
  ],
  resolve: {//для псевдонимов путей @ вместо ./src/assets
    alias: {
      '@': Path.resolve(__dirname, './src'),
      '@js': Path.resolve(__dirname, './src/js'),
      '@img': Path.resolve(__dirname, './src/img'),
    }
  },
  build: {//для многостраничной сборки
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'login/index.html')
      }
    }
  }
}