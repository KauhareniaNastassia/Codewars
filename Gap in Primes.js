function gap(g, m, n) {

    function isPrime(num) {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {return  0}
        }
        return 1
    }

    function noPrimesBetweenTwo(i, j) {
        for (let k = i+1; k < j-1; k++) {
            if (isPrime(k)) {return 0}
        }
        return 1
    }

    for ( m; m < n-g; m++) {
        if (isPrime(m) && isPrime(m+g) && noPrimesBetweenTwo(m, m+g)) {
            return [m, m+g]
        }
    }
    return null
}

console.log(gap(6,100,110))
console.log(gap(10,300,400))
console.log(gap(2,100,110))
console.log(gap(4,100,110))
console.log(gap(8,300,400))