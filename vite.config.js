import Inspect from 'vite-plugin-inspect';//https://github.com/antfu-collective/vite-plugin-inspect
import Path from 'path';//для псевдонимов путей
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';//https://github.com/FatehAK/vite-plugin-image-optimizer
import { defineConfig } from 'vite';


export default defineConfig(() => {
  return {
    plugins: [
      Inspect(),
      ViteImageOptimizer({
        png: {
          // https://sharp.pixelplumbing.com/api-output#png
          quality: 70,
        },
        jpeg: {
          // https://sharp.pixelplumbing.com/api-output#jpeg
          quality: 40,
        },
        jpg: {
          // https://sharp.pixelplumbing.com/api-output#jpeg
          quality: 40,
        },
      }),
    ],
    resolve: {//для псевдонимов путей @ вместо ./src/assets
      alias: {
        '@': Path.resolve(__dirname, './src'),
        '@js': Path.resolve(__dirname, './src/js'),
        '@img': Path.resolve(__dirname, './src/img'),
      }
    },
  };
});