function generateHashtag (str) {
    let arr = str.split(' ')
    let finalArr = []
    for (let i=0; i< arr.length; i++) {
        if (arr[i] !== '') {
            arr[i] = arr[i].substring(0, 1).toUpperCase() + arr[i].substring(1)
            finalArr.push(arr[i])
        }
    }
    return finalArr.join('').length === 0 || finalArr.join('').length >= 140 ? false : '#' + finalArr.join('')
}


console.log(generateHashtag(""))
console.log(generateHashtag(" "))
console.log(generateHashtag('Do We       have A Hashtag'))
console.log(generateHashtag('Codewars is nice'))
console.log(generateHashtag("a".repeat(141)))
