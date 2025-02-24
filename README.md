# сборка Vite
- устанавливаем vite npm create vite@latest
- устанавливаем vite-plugin-inspect npm i -D vite-plugin-inspect
```import Inspect from 'vite-plugin-inspect'
export default {
  plugins: [
    Inspect()
  ],
}```

- http://localhost:5173/__inspect/

## псевдонимы путей
```import Path from 'path'//для псевдонимов путей
export default {
  resolve: {//для псевдонимов путей
    alias: {
      '@': Path.resolve(__dirname, './src/assets'),
      '@js': Path.resolve(__dirname, './src/js'),
      '@img': Path.resolve(__dirname, './src/img'),
    }
  }
}```

## многостраничная сборка
- создаем в корне проекта папку для новой страницы
```import Inspect from 'vite-plugin-inspect';//https://github.com/antfu-collective/vite-plugin-inspect
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
}```