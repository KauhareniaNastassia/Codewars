function solution(string) {
    let arr = string.split('')
    let camelLetters = arr.filter( el => el === el.toUpperCase())

    if(camelLetters.length === 0) {
        return string
    }

    for (let j=0; j< arr.length; j++) {
        for (let i = 0; i< camelLetters.length; i++) {
            if (arr[j] === camelLetters[i]) {
                arr[j] = ' ' + arr[j]
            }
        }
    }

    return arr.join('')
}


console.log(solution(('knowWeekWorkMan')))

