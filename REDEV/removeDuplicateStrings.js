/*
Напишите функцию `removeDuplicate(str)`, которая возвращает строку,
    очищенную от слов-дупликатов, т.е.
    каждое слово должно повторяться не более одного раза.

    const str = "вишня, груша, слива, груша";

Например:
    removeDuplicate(str) --> "вишня, груша, слива"*/


function removeDuplicate(str) {
    return Array.from(new Set(str.split(','))).join(' ')
}


console.log(removeDuplicate("вишня, груша, слива, груша"))