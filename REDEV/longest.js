/*
Даны две строки, которые содержат только буквы от a - z.
    Ваша задача написать функцию, которая возвращает
новую отсортированную (по порядку) строку,
    которая содержит буквы двух строк, повторяющихся только один раз.

    Например:
longest("xyaabbbccccdefww", "xxxxyyyyabklmopq") --> "abcdefklmopqxy"*/


function longest(str1, str2) {
    let str  = (str1 + str2).split('').sort()
    let set = new Set(str)
    return Array.from(set).join('')
}

console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"))