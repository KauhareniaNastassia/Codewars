function firstNonRepeatingLetter(s) {

    let arr = s.toLowerCase().split('')
    let arrFromSet = Array.from(new Set(arr))

    let answer = ''

    for (let i = 0; i< arrFromSet.length; i++) {
        let filtered = arr.filter(el => el === arrFromSet[i])
        if (filtered.length === 1) {
            answer = arrFromSet[i]
            break
        }
    }
    return answer.length === 0 ? '' :  s.split('').find(el => el === answer || el === answer.toUpperCase() )
}


console.log(firstNonRepeatingLetter('stress'))
console.log(firstNonRepeatingLetter('moonmen'))
console.log(firstNonRepeatingLetter('sTreSS'))
console.log(firstNonRepeatingLetter('a'))
console.log(firstNonRepeatingLetter('aadd'))