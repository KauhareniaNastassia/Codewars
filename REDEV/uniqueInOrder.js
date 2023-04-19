/*
Реализуйте функцию unique_in_order, которая принимает в качестве аргумента
последовательность и возвращает список элементов
без каких-либо элементов с одинаковым значением рядом
друг с другом и с сохранением исходного порядка элементов.

    Например:
uniqueInOrder('AAAABBBCCDAABBB') --> ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         --> ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       --> [1,2,3]*/

function uniqueInOrder(value) {
    if (typeof value === 'string') {
        value = value.split('')
    }
    let arr = []
    for (let i = 0; i < value.length; i++) {
        if (value[i] !== value[i + 1]) {
            arr.push(value[i])
        }
    }
    return arr
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'))
console.log(uniqueInOrder('ABBCcAD'))
console.log(uniqueInOrder([1, 2, 2, 3, 3]))