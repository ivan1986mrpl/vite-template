- устанавливаем vite npm create vite@latest
- устанавливаем vite-plugin-inspect npm i -D vite-plugin-inspect
- import Inspect from 'vite-plugin-inspect'
export default {
  plugins: [
    Inspect()
  ],
}
- http://localhost:5173/__inspect/

- import Path from 'path'//для псевдонимов путей
export default {
  resolve: {//для псевдонимов путей
    alias: {
      '@': Path.resolve(__dirname, './src/assets')
    }
  }
}