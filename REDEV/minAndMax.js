/*
Напишите функцию, которая возвращает минимальное и
максимальное значение заданного массива.

    Например:
[1, 5, 8, 10, 35, 100] --> [1, 100]
    [-5, -7, -2, 5] --> [- 7, 5]*/


function minAndMax(arr) {
    arr.sort((a, b) => a-b)
    return [arr[0], arr[arr.length - 1]]

}

console.log(minAndMax([1, 5, 8, 10, 35, 100]))
console.log(minAndMax([-5, -7, -2, 5]))