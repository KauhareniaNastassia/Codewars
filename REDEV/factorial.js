/*
Напишите функцию, которая находит факториал 5.*/


function factorial(num) {
    let mult = 1
    for (let i=1; i<num+1; i++) {
        mult *= i
    }
    return mult
}

console.log(factorial(5))