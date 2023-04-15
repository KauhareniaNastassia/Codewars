/*
Напишите функцию `strip(str)`, которая удаляет все лишние пробелы из строки str.

    Например:
const str = "    Pasha is a good      boy     ";
strip(str) --> "Pasha is a good boy"*/

function strip(str) {

    let arr = str.split(' ')
    let res = arr.filter(el => el !== '')
    return res.join(' ')

}

console.log(strip("    Pasha is a good      boy     "))
