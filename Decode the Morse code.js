decodeMorse = function (morseCode) {
    let alphabet = {
        'a': '.-', 'b': '-...', 'c': '-.-.', 'd': '-..',
        'e': '.', 'f': '..-.', 'g': '--.', 'h': '....',
        'i': '..', 'j': '.---', 'k': '-.-', 'l': '.-..',
        'm': '--', 'n': '-.', 'o': '---', 'p': '.--.',
        'q': '--.-', 'r': '.-.', 's': '...', 't': '-',
        'u': '..-', 'v': '...-', 'w': '.--', 'x': '-..-',
        'y': '-.--', 'z': '--..', ' ': '/',
        '1': '.----', '2': '..---', '3': '...--', '4': '....-',
        '5': '.....', '6': '-....', '7': '--...', '8': '---..',
        '9': '----.', '0': '-----',
    }

    let keys = Object.keys(alphabet)
    let values = Object.values(alphabet)

    let arr = morseCode.split(' ')
    let finalArr = []

    for (let i = 0; i < arr.length; i++) {
        let found = values.find(el => el === arr[i])

        if (found === undefined && finalArr[i - 1] !== ' ') {
            finalArr.push(' ')
        }
        if (found) {
            finalArr.push(keys.find(el => keys.indexOf(el) === values.indexOf(found)).toUpperCase())
        }
    }
    return finalArr.join('')

}


console.log(decodeMorse('.... . -.--   .--- ..- -.. .'))