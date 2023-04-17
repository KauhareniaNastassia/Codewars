/*
Ваша задача - отсортировать заданную строку.
    Каждое слово в строке будет содержать одно число.
    Это число - позиция, которую слово должно занимать в результате.

    Примечание: числа могут быть от 1 до 9.
Таким образом, 1 будет первым словом (не 0).

Если входная строка пуста, вернуть пустую строку.
    Слова во входной строке будут содержать только последовательные числа.

    Например:
"is2 Thi1s T4est 3a" -> "Thi1s is2 3a T4est"*/


function sortedArr(str) {
    let arr = []
    for (let i = 1; i < 10; i++) {
        arr.push(i)
    }

    let strArr = str.split(' ')
    for (let i = 0; i < strArr.length; i++) {
        let item = strArr[i].split('').find(Number)
        arr[item - 1] = strArr[i]
    }
    return arr.filter(el => typeof el === 'string').join(' ')

}

console.log(sortedArr("is2 Thi1s T4est 3a"))