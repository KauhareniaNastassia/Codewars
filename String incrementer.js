function incrementString(strng) {

    let arr = strng.split('').reverse()

    let arrForNum = []
    for (let i=0; i< arr.length; i++){
        if (+arr[i] === Number(arr[i])) {
            arrForNum.push(arr[i])
        } else {
            break
        }
    }

   let num =  arrForNum.reverse().join('')
    if (num.length === 0) {
        return strng + '1'
    }

    let answer = strng.substring(0, strng.length - num.length)
    let numPlus1 = (Number(num) + 1).toString()
    let count = num.length - numPlus1.length
    let zeros = ''
    if (count > 0) {
        zeros = '0'.repeat(count)
    }

    return answer + zeros + numPlus1
}


console.log(incrementString('fo99obar99'))
console.log(incrementString("foobar00999"))
console.log(incrementString('foo'))
console.log(incrementString('foobar1'))
