/*
Напишите функцию с двумя параметрами, которая создаёт массив элементов,
    представляющих собой сумму соответствующих элементов заданных массивов.

    Например:
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6];

func(array1,array2) // [5,7,9,4,5]*/


function func(array1,array2) {

    let newArray = array1.slice(0, array2.length)
    let lastOfArray = array1.slice(array2.length)

    for (let i=0; i< newArray.length; i++) {
        newArray[i] += array2[i]
    }
    return newArray.concat(lastOfArray)
}


console.log(func([1, 2, 3, 4, 5],[4, 5, 6]))