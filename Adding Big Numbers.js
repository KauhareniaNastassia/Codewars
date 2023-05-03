function add(a, b) {
    let arrA = []
    let arrB = []

    if (a.length >= b.length) {
        arrA = a.split('').reverse()
        arrB = b.split('').reverse()
    }
    if (a.length < b.length) {
        arrA = b.split('').reverse()
        arrB = a.split('').reverse()
    }

    let newArr = []
    let count = 0

    for (let i = 0; i < arrA.length; i++) {
        let sum = count + +arrA[i] + +arrB[i]
        if (arrA[i] && +arrB[i]) {
            sum = count + +arrA[i] + +arrB[i]
        }
        if (!+arrB[i]) {
            sum = count + +arrA[i]
        }

        if (sum > 9) {
            newArr.push(sum - 10)
            count = 1
        }
        if (sum < 10) {
            newArr.push(sum)
            count = 0
        }
    }

    if (count ===1 ) {
        newArr.push(count)
    }
    return newArr.reverse().join('')
}

console.log(add("123", "321"))
console.log(add("888", "222"))
console.log(add('63829983432984289347293874', '90938498237058927340892374089'))
