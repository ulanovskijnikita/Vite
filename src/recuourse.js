console.log('module a')// импорт напрямую из node_modules

// расширение не для js нужно указывать

// import стилей как строку
import style from "@/index.css?inline"

// импорт css-модулей 
// стили из этих модулей подключаются к странице, но их названия классов изменяются Vite
import module1 from './accets/module1.module.css'
import module2 from "./accets/module2.module.css"

console.log(
  module1,
  module2
)

// Чтобы использовать css-классы, нужно явно присвоить css-класс из модуля к нужному элементу
document.body.querySelector('.module1').className = `${module1.module1} ${module2.module1}`

// PostCSS
import "./accets/index.css";

// Препроцессор
// Требуется установка компилятора
import './accets/index.sass'

// import напрямую из node_modules
import collect from "collect.js";

console.log(
  collect([1, 3, 3, 7]).avg(),
  style
)

// Импорт JSON
import data from '../package.json'
console.log(data)

// Импорт img
import svg from './img/logo.svg'

document.body.querySelector('#image')
.src = svg

// Import путя к файлу (не для картинки)
import pathSVG from './../package.json?url'
console.log(pathSVG)

// Import img "как текст"
import textSVG from './img/logo.svg?raw'
document.body.insertAdjacentHTML('beforeend', textSVG)

// Оптимизация картинок
import optimization from './img/optimization.png'

document.body.querySelector('#optimization')
  .src = optimization
