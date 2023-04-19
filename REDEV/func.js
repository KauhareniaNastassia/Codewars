/*
Дан массив целых чисел, найдите тот, который встречается нечетное количество раз.
    Всегда будет только одно целое число, которое встречается нечетное количество раз.

    Например:
func([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]) --> 5
func([1,1,2,-2,5,2,4,4,-1,-2,5]) --> -1
func([20,1,1,2,2,3,3,5,5,4,20,4,5]) --> 5*/

function func(arr) {
    let newArr = Array.from(new Set(arr))
    let arrOfCounts = []
    for (let i = 0; i < newArr.length; i++) {
        arrOfCounts.push(arr.filter(el => el === newArr[i]).length)
    }
    return newArr[arrOfCounts.indexOf(arrOfCounts.find(el => el % 2 !== 0))]
}

console.log(func([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]))
console.log(func([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]))
console.log(func([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]))
