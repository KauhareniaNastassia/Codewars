function sumDigPow(a, b) {

    let arr = []
    for (let i = a; i<= b; i++) {
        arr.push(i)
    }
    let finalArr = []

    for (let i=0; i< arr.length; i++) {
        let numArr = arr[i].toString().split('')
        let sum = 0
        for (let j=0; j< numArr.length; j++) {
            sum += Math.pow(+numArr[j], j+1)
        }
        if(sum === arr[i]) {
            finalArr.push(arr[i])
        }
    }

   return finalArr
}


console.log(sumDigPow(1, 10))
console.log(sumDigPow(1, 100))
console.log(sumDigPow(50, 150))