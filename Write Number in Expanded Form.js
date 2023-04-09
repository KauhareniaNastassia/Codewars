function expandedForm(num) {
    if (num <= 10) {
        return num
    }
    let arr = num.toString().split('')
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        let num = +arr[i] * Math.pow(10, arr.length - i - 1)
        if (num !== 0) {
            newArr.push(num)
        }
    }
    return newArr.join(' + ')
}


console.log(expandedForm(12))
console.log(expandedForm(42))
console.log(expandedForm(70304))