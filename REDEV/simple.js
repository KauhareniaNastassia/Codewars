/*
Функция simple, в качестве параметра принимающая строку слов,
    возвращает длину самого короткого слова

Например:
    simple("Redev - это про дисциплину") --> 3*/


function simple(arr) {
    let newArr = arr.replace(/[.,-\/#!$%^&*;:{}=\-_`~()]/g, '').replace(/\s{2,}/g, " ").split(' ')
    for (let i = 0; i < newArr.length; i++) {
        newArr[i] = newArr[i].length
    }
    return Math.min(...newArr)
}

console.log(simple("Redev - это про дисциплину"))
