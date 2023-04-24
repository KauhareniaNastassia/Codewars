function perimeter(n) {

    let fibArr = []

    for (let i = 0; i < n+1; i++) {
        if (i === 0 || i === 1) {
            fibArr.push(1)
        } else {
            fibArr.push(fibArr[i-2] + fibArr[i-1])
        }
    }

    return 4 * fibArr.reduce((acc, res) => acc + res, 0)
}


console.log(perimeter(5))
console.log(perimeter(7))
console.log(perimeter(20))