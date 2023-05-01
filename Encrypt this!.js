var encryptThis = function(text) {

    let arr = text.split(' ')

    for (let i = 0; i< arr.length; i++) {
        if (arr[i].length < 3) {
            if (arr[i].length === 1) {
                arr[i] = arr[i].charCodeAt(0)
            } else {
                arr[i] = arr[i].charCodeAt(0) + arr[i][1]
            }
        }
        else {
            arr[i] = arr[i].charCodeAt(0) + arr[i].substring(arr[i].length - 1) + arr[i].substring(2, arr[i].length-1) + arr[i][1]
        }
    }
    return arr.join(' ')
}

console.log(encryptThis('Hello'))
console.log(encryptThis('A'))
console.log(encryptThis('A wise old owl lived in an oak'))