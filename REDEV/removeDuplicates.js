/*
Напишите функцию `removeDuplicates(arr)`, которая возвращает массив,
    в котором удалены повторяющиеся элементы из массива arr.

    Например:
let arr = ["php", "php", "css", "css",
    "script", "script", "html", "html", "java"
];

removeDuplicates(arr); --> ["php","css","script","html","java"]*/


function removeDuplicates(arr) {
    let set = new Set(arr)

    return Array.from(set)
}

console.log(removeDuplicates(["php", "php", "css", "css",
    "script", "script", "html", "html", "java"
]))