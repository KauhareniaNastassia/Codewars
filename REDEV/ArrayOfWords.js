/*
Дан массив слов, необходимо определить,
    составлены ли все слова из одних и тех же символов.

    Например:
["кот", "ток", "кто"] --> true
    ["кот", "тк", "кТо"] --> false*/


function arrayOfWords(array) {
    let arr = array.join('').split('')
    let set = new Set(arr)
    let newArrFromSet = Array.from(set).sort().join('')
    let finalArr = []

    for (let i = 0; i < array.length; i++) {
        let word = array[i].split('').sort().join('')

        if (word !== newArrFromSet) {
            finalArr.push(array[i])
        }
    }
    return finalArr.length === 0
}

    console.log(arrayOfWords(["кот", "ток", "кто"]))
    console.log(arrayOfWords(["кот", "тк", "кТо"]))