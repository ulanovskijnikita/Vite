console.log('module a')// импорт напрямую из node_modules

// расширение не для js нужно указывать
import './accets/index.css'

// import стилей как строку
import style from "./accets/index.css?inline"

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



// import напрямую из node_modules
import collect from "collect.js";

console.log(
  collect([1, 3, 3, 7]).avg(),
  style
)