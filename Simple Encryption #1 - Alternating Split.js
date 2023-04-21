function encrypt(text, n) {
    if (n < 1 || text === null) {
        return text
    }
    let answer = text
    let num = n

    function enc() {
        let arr = answer.split('')
        let arrOfOdd = []
        let arrOfEven = []

        for (let i = 0; i < arr.length; i++) {
            if (i % 2 !== 0) {
                arrOfOdd.push(arr[i])
            } else {
                arrOfEven.push(arr[i])
            }
        }
        answer = arrOfOdd.join('') + arrOfEven.join('')
        num = num - 1
    }

    while (num > 0) {
        enc()
    }
    return answer
}

function decrypt(encryptedText, n) {
    if (n < 1 || encryptedText === null) {
        return encryptedText
    }
    let answer = encryptedText
    let num = n
    let center = Math.floor(answer.length / 2)

    function enc() {
        let arrOfOdd = answer.substring(0, center).split('')
        let arrOfEven = answer.substring(center).split('')
        let arr = []
        for (let i = 0; i < arrOfEven.length; i++) {
            arr.push(arrOfEven[i])
            arr.push(arrOfOdd[i])
        }
        answer = arr.join('')
        num = num - 1
    }

    while (num > 0) {
        enc()
    }
    return answer
}


//console.log(encrypt("This is a test!", 0))
//console.log(encrypt("This is a test!", 2))
console.log(decrypt("This is a test!", 0))
console.log(decrypt("hsi  etTi sats!", 1))