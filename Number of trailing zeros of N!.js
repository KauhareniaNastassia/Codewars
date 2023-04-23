function zeros(n) {

    let arr2 = []
    let arr5 = []
    for (let i = 2; i < n + 1; i++) {
        let n = i
        while (n % 2 === 0) {
            n /= 2
            arr2.push(n)
        }
        while (n % 5 === 0) {
            n /= 5
            arr5.push(n)
        }
    }
   return arr2.length < arr5.length ? arr2.length : arr5.length
}


console.log(zeros(0))
console.log(zeros(100))
console.log(zeros(5))
console.log(zeros(6))
console.log(zeros(30))


/*
function zeros(n) {
    if (n === 0) return 0
    let arr = []
    for (let i = 1; i < n + 1; i++) {
        if (i % 2 === 0 || i % 5 === 0) {
            arr.push(i)
        }
    }

    let num = arr.reduce((acc, res) => acc * res).toString().split('').reverse()
    let final = ''
    for (let i = 0; i < num.length; i++) {
        if (num[i] === '0') {
            final += num[i]
        } else {
            break
        }
    }
    return final.length
}*/
