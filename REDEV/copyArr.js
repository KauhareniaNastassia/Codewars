/*
Напишите функцию `copyArr(arr)`, которая копирует массив, не изменяя оригинал.

    Например:
const vegetables = ['Капуста', 'Репа', 'Редиска'];*/


function copyArr(arr) {
    return arr.slice()
}

let vegetables = copyArr(['Капуста', 'Репа', 'Редиска'])
console.log(vegetables)