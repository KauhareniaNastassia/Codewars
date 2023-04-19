/*
Напишите функцию, которая принимает строку круглых скобок и определяет,
    допустим ли порядок скобок.
    Функция должна возвращать истину, если строка действительна,
    и ложь, если она недействительна.

    Например:
validParentheses(')(()))') --> false
validParentheses('()') --> true
validParentheses('()()') --> true
validParentheses('()((()') --> false*/


function validParentheses(str) {
    let arr = str.split('')
    let newArr = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '(') {
            newArr.push(arr[i])
        }

        if (arr[i] === ')' && newArr[newArr.length - 1] === '(') {
            newArr.push(arr[i])
        }
    }
    return newArr.filter(el => el === '(').length === newArr.filter(el => el === ')').length
}

console.log(validParentheses(')(()))'))
console.log(validParentheses('()'))
console.log(validParentheses('()()'))
console.log(validParentheses('()((()'))