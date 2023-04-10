function rot13(message) {

    let string = message.toLowerCase()

    let arr = string.toLowerCase().split('')
    console.log(arr)
    let alphabet = [...Array(26)].map((el, i) => (i + 10).toString(36))

    let arrOfIndexes = arr.map(el => el.charCodeAt(0) - 96 + 13)
    console.log(arrOfIndexes)
    let finalArr = []
    for (let i = 0; i < arrOfIndexes.length; i++) {

        let index = arrOfIndexes[i] - 1
        if (arrOfIndexes[i] > 26) {
            index = arrOfIndexes[i] - 26 - 1
        }
        let find = alphabet.find(el => alphabet.indexOf(el) === index)
        finalArr.push(find)
    }

   // console.log(finalArr)
    let finalMessage = finalArr.join('')
    if (message[0] === message[0].toUpperCase()) {
        finalMessage = finalMessage.substring(0, 1).toUpperCase() + finalMessage.substring(1)
    }
    return finalMessage
}



console.log(rot13('Test'))
//console.log(rot13('Ruby is cool!'))
//console.log(rot13('rVL\'|PQu*t>'))



