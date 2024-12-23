// нестандартный импорт
import './recuourse'
import './module'

// Vite может использовать JSX без React, но для этого нужно указать некоторые параметры конфигурации
import {reactElement} from './jsx/index'
// Вложенность не сработала
// import {a} from './jsx/ui/a'
console.log({jsx: reactElement.outerHTML})
document.body.querySelector('#app')
    .insertAdjacentElement('beforeend', reactElement)

// document.body.querySelector('#app')
//     .insertAdjacentElement('beforeend', a)

import './ts/main'
// По умолчанию, Vite просто преобразовывает ts-синтаксис в js- с помощью esbuild, не выполняя статическую проверку типов
// Это сделано для того, чтобы сборка происходила быстрее
// Vite рекомендует совершать статическую проверку типов в отдельном потоке
// Для этого можно использовать пакет typescript и использовать tsc или интегрировать статическую проверку типов в сборке с помощью плагина vite-plugin-checker

console.log({meta: import.meta.env})
// Переменные окружения Vite
// Чтобы определить свои общие переменные окружения, можно создать файл .env
// Также можно использовать переменные окружения напрямую из html "%имя_переменной%"