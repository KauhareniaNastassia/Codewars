/*
Напишите функцию, которая возвращает сумму двух наименьших положительных чисел,
    учитывая массив из минимум 4 положительных чисел.

    Например:
[12,423,54,1235,3,15,2,52] --> 5*/

function sumOfPositiveIntegers(arr) {
    let finalArr = arr.sort((a, b) => a - b).filter(el => el >= 0)
    return finalArr[0] + finalArr[1]
}

console.log(sumOfPositiveIntegers([12, 423, 54, 1235, 3, 15, 2, 52]))
