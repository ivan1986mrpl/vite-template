import Inspect from 'vite-plugin-inspect'//https://github.com/antfu-collective/vite-plugin-inspect

export default {
  publicDir: 'static',//меняем название папки со статическими файлами в dist
  plugins: [
    Inspect()
  ],
}