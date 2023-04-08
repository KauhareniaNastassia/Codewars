function validBraces(braces) {
    let arr = []
    for (let i = 0; i < braces.length; i++) {
        if (braces[i] === '(' || braces[i] === '[' || braces[i] === '{') {
            arr.push(braces[i])
        } else {
            if (!arr.length) {
                return false
            }

            let el = arr[arr.length - 1]

            if ((braces[i] === ')' && el === '(') || (braces[i] === ']' && el === '[') || (braces[i] === '}' && el === '{')) {
                arr.pop()
            } else break
        }
    }
    return !arr.length
}

console.log(validBraces("[(])"))