function toWeirdCase(string){

    let arr = string.split(' ')

    for (let i = 0; i< arr.length; i++) {
        let item = arr[i].split('')
        for (let j=0; j < item.length; j++) {
           if (j % 2 === 0) {
               item[j] = item[j].toUpperCase()
           } else {
               item[j] = item[j].toLowerCase()
           }
        }
        arr[i] = item.join('')
    }

    return arr.join(' ')
}


console.log(toWeirdCase('String'))
console.log(toWeirdCase("Weird string case"))
console.log(toWeirdCase('This is a test'))