function primeFactors(n){
    let num = n
    const primes = [];
    for (let factor = 2; factor <= num; factor++) {
        while ((num % factor) === 0) {
            primes.push(factor);
            num /= factor;
        }
    }

    let set = new Set()
    let arr = primes.slice()
    for (let i = 0; i < arr.length; i++) {
        let finded = arr.filter(el => el === arr[i])

        if (finded.length === 1) {
            set.add(`(${arr[i]})`)
        } else {
            set.add(`(${arr[i]}**${finded.length})`)
        }

       arr.slice(0, finded.length)
    }

    return Array.from(set).join('')
}




console.log(primeFactors(86240))
console.log(primeFactors(7775460))