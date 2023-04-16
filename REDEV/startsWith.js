/*
Напишите функцию `startsWith()`, которая определяет, начинается ли строка символами другой строки, возвращая, соотвественно, true или false.

    let str = 'abc def ghi jkl mno pqr stu';

Например:
    str.startsWith('abc') --> */


String.prototype.startsWith = function startsWith(substr) {
    let string = this.split(' ').join('')
    let start = string.substring(0, substr.length)

    return substr === start
}

let str = 'abc def ghi jkl mno pqr stu';
str.startsWith('abc')