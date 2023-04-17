/*
**Преобразовать массив**
Ваша задача - реализовать функцию transform(arr),
    которая принимает массив и возвращает преобразованный массив
на основе управляющих последовательностей, содержащихся в arr.
    Управляющие последовательности - это определенные строковые элементы
указанного массива:

    **--discard-next** исключает следующий элемент массива из преобразованного массива.
**--discard-prev** исключает предыдущий элемент массива из преобразованного массива.
**--double-next** удваивает следующий элемент массива в преобразованном массиве.
**--double-prev** удваивает предыдущий элемент массива в преобразованном массиве.

    Например:

transform ([1, 3, '--double-next', 4]) --> [1, 3, 4, 4]
transform ([1, 3, '--discard-prev', 4]) --> [1, 4]*!/*/


function transform(arr) {
    let newArr = []

    for (let i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) === 'number') {
            newArr.push(arr[i])
        }
        if (arr[i] === '--discard-next') {
            i++
        }
        if (arr[i] === '--discard-prev') {
            newArr.pop()
        }
        if (arr[i] === '--double-next') {
            newArr.push(arr[i +1])
        }
        if (arr[i] === '--double-prev') {
            newArr.push(arr[i -1])
        }
    }
   return newArr
}


console.log(transform([1, 3, '--double-next', 4]))
console.log(transform([1, 3, '--discard-prev', 4]))