/*
Напишите функцию `uniqueLetters(str)`, которая возвращает строку,
    оставив в ней только уникальные символы, т.е. встречающиеся в строке один раз.

    Например:
uniqueLetters('anaconda'); --> 'ancod'
uniqueLetters('redev'); --> 'redv'*/


function uniqueLetters(str) {
    return Array.from(new Set(str.split(''))).join('')
}

console.log(uniqueLetters('anaconda'))
console.log(uniqueLetters('redev'))