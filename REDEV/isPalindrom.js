/*
Напишите функцию, которая проверит, является ли строка палиндромом.
(Для того, чтобы решить эту задачу, надо загуглить)*/


function isPalindrom(string) {
    let str = string.toLowerCase().split(' ').join('')
    let reversedStringArr = string.toLowerCase().split(' ').join('').split('').reverse().join('')
    return str === reversedStringArr
}

console.log(isPalindrom('топот'))
console.log(isPalindrom('а роза упала на лапу Азора'))