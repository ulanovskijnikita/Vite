// vite.config.ts
import Inspect from 'vite-plugin-inspect'
import checker from 'vite-plugin-checker'

// Плагин для оптимизации картинок
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { defineConfig } from 'vite';

// Для корректной работы модулей node.js с ts нужно выполнить установку типов node.js 'npm install --save-dev @types/node'
import { resolve } from 'path'
console.log(resolve(__dirname, './src/jsx/createJSX'))

export default defineConfig(() => {
  return {
    // Для преобразования jsx без библиотеки React Vite использует сборщик esbuild
    // Для каждого компонета esbuild будет вызывать указанную в jsxFactory функцию, которая получает название  элемента, его атрибуты и содержимое
    esbuild: {
      // Данная функция нужна в каждом файле, который использует jsx
      jsxFactory: 'createJSX',
      // Чтобы не прописывать импорты для функции в каждом файле, можно всталять их динамически
      jsxInject: `import createJSX from "./createJSX"`
    },

    plugins: [
      Inspect(),
      checker({
        typescript: true
      }),
      ViteImageOptimizer({
        png: {
          quality: 40,
        },
      }),
    ],

    // Псевдонимы путей
    resolve: {
      alias: {
        '@': resolve(__dirname, './src/accets')
      }
    },
    
    // Окружение
    // envPrefix: '...'

    // Сборка MPA
    // Для того, чтобы Vite собирал файлы для нескольких страниц, нужно перечислить их в build.rollupOptions.input
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          login: resolve(__dirname, 'src/pages/login/index.html'),
        }
      }
    },

    // Конфигурация сервера
    server: {
      // port: 3333,
      // Если порт занят, то выбрасывается ошибка. По умолчанию порт переопределяется автоматически
      strictPort: true,
      // Заголовки ответа (состояние может кешироваться, поэтому после модификации лучше чистить)
      headers: {
        test: 'test'
      },
      // Настройка запросов к сторонним источникам, где свойство - страница, на которую нужно обратиться для запроса, а свойство - адрес, на который данный путь будет переадресован
      proxy: {
        '/products': ''
      }
    }
  }
});