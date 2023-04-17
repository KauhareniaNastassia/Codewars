/*
Напишите функцию, которая принимает строковый параметр и
меняет буквы в словах в обратном порядке.
    Все пробелы в строке должны быть сохранены.

    Например:
"This is an example!" -> "sihT si na !elpmaxe"*/


function reverseWordsInString(string) {

    let arr = string.split(' ')
    let newArr = []
     for (let el  of arr) {
         newArr.push(el.split('').reverse().join(''))
     }
     return newArr.join(' ')

}

console.log(reverseWordsInString("This is an example!"))