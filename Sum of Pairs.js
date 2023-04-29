function sumPairs(ints, s) {

    let arr = []
    let arrOfIndexes = []
    for (let i = 0; i < ints.length; i++) {
        for (let j = i + 1; j < ints.length; j++) {
            if (ints[i] + ints[j] === s) {
                arr.push([ints[i], ints[j]])
                arrOfIndexes.push(j)
            }
        }
    }

    if (arr.length === 0) {
        return undefined
    }
    if  (arr.length === 1) {
        return arr[0]
    } else {
        for (let i = 0; i< arr.length; i++) {
            if (arr[i][1] === ints[arrOfIndexes.sort()[0]]) {
                return arr[i]
            }
        }
    }
}


console.log(sumPairs([10, 5, 2, 3, 7, 5], 10))
console.log(sumPairs([1, 4, 8, 7, 3, 15], 8))
console.log(sumPairs([20, -13, 40], -7))