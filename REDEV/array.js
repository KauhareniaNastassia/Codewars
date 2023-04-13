/*
Напишите функцию, которая находит наиболее часто используемый элемент массива.

    Например:
const array=[7, 'z', 'z', 'z', 3, 7, 'z', 7, 'z', 3, 5, 7]; --> "z"*/


function func(array) {
    let set = new Set(array)
    let newArray = Array.from(set)
    let arrayOfCounts = []
    for (let i = 0; i < newArray.length; i++) {
        let filtered = array.filter(el => el === newArray[i])
        arrayOfCounts.push(filtered.length)
    }
    return array.find(el => array.indexOf(el) === arrayOfCounts.indexOf(Math.max(...arrayOfCounts)))
}

console.log(func([7, 'z', 'z', 'z', 3, 7, 'z', 7, 'z', 3, 5, 7]))