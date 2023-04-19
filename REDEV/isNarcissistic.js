/*
Нарциссическое число - это число длины n, в котором
сумма цифр в степени n равна исходному числу.

    Например:
isNarcissistic(153) --> true;
isNarcissistic(435) --> false;
isNarcissistic(370) --> true;
isNarcissistic(1032) --> false;*/

function isNarcissistic(num) {
    let sum = 0
    let arr = num.toString().split('')
    for (let item of arr) {
        sum += Math.pow(+item, arr.length)
    }
    return sum === num
}

console.log(isNarcissistic(153))
console.log(isNarcissistic(435))
console.log(isNarcissistic(370))
console.log(isNarcissistic(1032))
