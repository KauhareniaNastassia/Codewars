function productFib(prod){

    let finalArr=[]

    let fibonacci = [0, 1]

    for (let i=2; i< Math.sqrt(prod); i++) {
        fibonacci[i] = fibonacci[i-1] + fibonacci[i-2]
        if (fibonacci[i] * fibonacci[i-1] === prod) {
         finalArr.push(fibonacci[i-1], fibonacci[i], true)
        }if (fibonacci[i-2] * fibonacci[i-1] < prod && fibonacci[i-1] * fibonacci[i] > prod) {
            finalArr.push(fibonacci[i-1], fibonacci[i], false)
        }
    }
    return finalArr
}


console.log(productFib(4895))
console.log(productFib(84049690))