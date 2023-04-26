function sumStrings(a, b) {
     let numA =0
     let numB =0
    if (+a > +b) {
        numA = a
        numB = b
    }
    if(+a< +b) {
        numA = b
        numB = a
    }

    let arrA = numA.split('').reverse()
    let arrB = numB.split('').reverse()
    let finalArr = []
    let num = 0

   // let arrBigger = arrA.length> arrB.length ? arrA.slice() : arrB.slice()
   // let arrSmaller = arrA.length < arrB.length ? arrB.slice() : arrA.slice()
    for (let i = 0; i< arrA.length; i++) {
        let numB = +arrB[i]

        if (isNaN(+arrB[i])) {
            numB = 0
        }
        num += +arrA[i] + numB
        if (num > 9) {
            finalArr.push(num - 10)
            num = 1
        } else {
            finalArr.push(num)
            num = 0
        }
    }
    if (num === 1) {
        finalArr.push(1)
    }
    if (finalArr[finalArr.length - 1] === 0 && num === 0) {
        finalArr.pop()
    }
return finalArr.reverse().join('')

}


console.log(sumStrings('800', '9567'))
console.log(sumStrings('712569312664357328695151392', '8100824045303269669937'))
//console.log(sumStrings('123', '456'))
