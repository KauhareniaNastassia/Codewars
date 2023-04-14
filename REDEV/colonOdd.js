/*
Напишите функцию colonOdd(num), которая принимает число num в
качестве аргумента и вставляет двоеточие (:) между двумя нечетными числами.
    Например, если вводится число 55639217, то на выходе должно быть 5:563:921:7*/


function colonOdd(num) {
    let arr = num.toString().split('')
    for (let i = 1; i< arr.length; i++) {
        if (arr[i] % 2 !==0 && arr[i-1] % 2 !==0) {
            arr.splice(i, 0, ':')
            i++
        }
    }
    return arr.join('')
}

console.log(colonOdd(55639217))