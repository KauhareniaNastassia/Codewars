/*
Напишите функцию `replaceAll(find, replace, str)`,
    которая заменяет в строке str все вхождение подстроки find на подстроку replace.

    let str = 'abc def def lom abc abc def';

Например:
    replaceAll('abc', 'x', str) --> 'x def def lom x x def'*/

function replaceAll(find, replace, str) {

    let arr = str.split(' ')

    for (let i = 0; i < arr.length; i++) {

        if (arr[i].includes(find)) {
            arr[i] = replace
        }
    }

    return arr.join(' ')

}

let str = 'abc def def lom abc abc def'
console.log(replaceAll('abc', 'x', str))
