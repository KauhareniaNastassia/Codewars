function isValidIP(str) {
    let arr = str.split('.')
    if (arr.length > 4 || arr.length < 4) return false

    for (let i = 0; i < arr.length; i++) {
        let itemArr = arr[i].split('')
        if (itemArr.length === 0 || itemArr.length > 1 && itemArr[0] === '0') {
            return false
        }

        let find = itemArr.find(el => el != +el)
        if (arr[i].includes(' ') || arr[i].includes('\n') || find) {
            return false
        }
        if (+arr[i] < 0 || +arr[i] > 255) {
            return false
        }
    }
    return true
}


console.log(isValidIP('.134.74.86'))
console.log(isValidIP('d125.191.88.133'))
//console.log(isValidIP('01.02.03.04'))
//console.log(isValidIP('1.2.3.4 '))
//console.log(isValidIP('1e0.1e1.1e2.2e2'))
//console.log(isValidIP(' 1.2.3.4'))
//console.log(isValidIP('\n1.2.3.4'))
//console.log(isValidIP('1.2.3.4.5'))