function scramble(str1, str2) {
    let arr1 = str1.split('')
    let arr2 = str2.split('')

    for (let i = 0; i < arr2.length; i++) {
        let item = arr1.find(el => el === arr2[i])
        if (item === undefined) {
            return false
        } else {
            arr1.splice(arr1.indexOf(item), 1)
        }
    }
    return true
}

console.log(scramble("abcdefghijklmnopqrstuvwxyz".repeat(10_000), "zyxcba".repeat(9_000)))
console.log(scramble('cedewaraaossoqqyt', 'codewars'))
console.log(scramble('scriptjavx', 'javascript'))
console.log(scramble('katas', 'steak'))