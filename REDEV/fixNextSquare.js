/*
Допустим, Вы знакомы с понятием "идеальный квадрат". (Например: 12 * 12 = 144).
А как найти следующий по очереди идеальный квадрат?

**Напишите функцию findNextSquare**, которая находит
следующий целочисленный идеальный квадрат после того,
    как он передан в качестве параметра.
    Напомним, что целочисленный идеальный квадрат - это такое
целое число n, sqrt (n) которого тоже является целым числом.

    Если параметр сам по себе не является идеальным квадратом, то
должно быть возвращено -1.

Например:
    findNextSquare(9); --> 16
findNextSquare(16); --> 25
findNextSquare(64); --> 81*/


function findNextSquare(num) {
    let sqr = Math.sqrt(num)

    if (Number.isInteger(sqr)) {
        return Math.pow(sqr+1, 2)
    } else {
        return -1
    }
}

console.log(findNextSquare(9))
console.log(findNextSquare(8))
console.log(findNextSquare(16))
console.log(findNextSquare(64))