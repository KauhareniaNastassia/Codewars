/*
В данной задаче Вам нужно удалить из одного массива все элементы второго массива.

    Например:
arrayDiff([1,2],[1]) --> [2]
arrayDiff([1,2,2,2,3,4],[2,3]) --> [1,4]*/


function arrayDiff(arr1, arr2) {
    let arr = arr1.slice()
    for (let i = 0; i < arr2.length; i++) {
        arr = arr.filter(el => el !== arr2[i])
    }
    return arr
}

console.log(arrayDiff([1, 2, 2, 2, 3, 4], [2, 3]))
console.log(arrayDiff([1, 2], [1]))
