function diamond(n) {
    if (n < 1 || n % 2 === 0) {
        return null
    }

    let arr = []
    for (let i = 1; i < n + 1; i++) {
        if (i %2 !== 0 ) {
            arr.push(' '.repeat((n-i)/2) + '*'.repeat(i) + '\n')
        }
    }
    for (let i = n-1; i > 0; i--) {
        if (i %2 !== 0 ) {
            arr.push(' '.repeat((n-i)/2) + '*'.repeat(i) + '\n')
        }
    }

   return arr.join('')
}

//console.log(diamond(1))
//console.log(diamond(3))
console.log(diamond(5))
//console.log(diamond(2))