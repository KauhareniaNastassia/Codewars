/*
Напишите функцию, которая принимает число n (n> 0) и
возвращает строку с обратной последовательностью от n до 1.


Например: если n = 5 на выходе у Вас должно быть "5 4 3 2 1"*/


function reverseFromN(n) {

    let arr = []
    for (let i = n; i > 0; i--) {
        arr.push(i)
    }
    return arr.join(' ')
}

console.log(reverseFromN(5))