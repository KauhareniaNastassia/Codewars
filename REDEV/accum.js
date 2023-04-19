/*
Ваша задача написать функцию, которая принимает
в качестве параметра строку и увеличивает каждую "букву" строки
на число позиции, которую она занимает.

    Например:
accum("abcd") --> "A-Bb-Ccc-Dddd"
accum("RqaEzty") --> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") --> "C-Ww-Aaa-Tttt"*/


function accum(str) {

    let arr = str.toLowerCase().split('')
    let finalArr = []

    for (let i = 0; i < arr.length; i++) {
        let item = arr[i].repeat(i+1)
        finalArr.push(item.substring(0, 1).toUpperCase() + item.substring(1))
    }
    return finalArr.join('-')
}

console.log(accum("abcd"))
console.log(accum("RqaEzty"))
console.log(accum("cwAt"))