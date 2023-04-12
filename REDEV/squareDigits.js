/*
Ваша задача написать функцию, которая принимает
в качестве параметра целое число и возводит в квадрат каждую цифру числа.
    Результат также необходимо вернуть в виде целого числа.

    Например:
squareDigits(9119) --> 811181*/


function squareDigits(num) {
    let arr = num.toString().split('')
    let answer = ''
    for (let i=0; i<arr.length; i++) {
        answer += Math.pow(+arr[i], 2)
    }
    return answer
}

console.log(squareDigits(9119))