// Метод vite может считывать много файлов
// Возвращает объект, где ключ - имя импортируемого файла, а значение - функция динамического импорта с путём этого файла
const module = import.meta.glob('./js/*.js')
console.log(module)

// Поэтому для загрузки модулей нужно вызвать эти функции

Object.values(module)
.forEach(item => {
    item()
    .then(currentModule => {
        // Модули выполнятся
        if ('module3' in currentModule) console.log(currentModule.module3)

        console.log(currentModule)        
    })
})

// Можно отключить "динамичность" модулей, тогда модули будут загружаться сразу, в возвращаемом значении объект, где ключ - имя импортируемого файла, а значение - объект загружаемого модуля с его экспортами (тоже, что и ранее в currentModule)
const moduleSinc = import.meta.glob('./js/*.js', {eager: true})
console.log({moduleSinc: moduleSinc})

// Также в качестве значения можно вернуть объект с ключем default со строковым представлением с помощью {query: 'raw'}
// Или путь с помощью {query: 'url'}

// Можно указать что именно можно экспортировать из модулей с помощью {import: '...'}
const currentModuleSinc = import.meta.glob('./js/*.js', {eager: true, import: 'name'})
// Теперь в каждом ключе объекта currentModuleSinc лежит значение name

console.log({currentModuleSinc: currentModuleSinc})