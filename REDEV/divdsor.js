/*
Создайте функцию с именем divisors, которая принимает
целое число n > 1 и возвращает массив со всеми делителями
целого числа (кроме 1 и самого числа), от наименьшего до наибольшего.
    Если число простое, верните строку '(integer) is prime'*/

function divisor(num) {
    let res = []

    for (let i = 2; i< num; i++) {
        if (num % i === 0) {
            res.push(i)
        }
    }
    return res.length > 0 ? res : `${num} is prime`
}

console.log(divisor(22))
console.log(divisor(9))
console.log(divisor(5))
