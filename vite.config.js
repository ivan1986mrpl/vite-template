import Inspect from 'vite-plugin-inspect'//https://github.com/antfu-collective/vite-plugin-inspect
import Path from 'path'//для псевдонимов путей

console.log(Path.resolve(__dirname, './src/assets'));

export default {
  plugins: [
    Inspect(),
  ],
  resolve: {//для псевдонимов путей @ вместо ./src/assets
    alias: {
      '@': Path.resolve(__dirname, './src/assets')
    }
  }
}