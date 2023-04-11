function wave(str){
    let newArr = []
    for (let i = 0; i< str.length; i++) {
        let string = str.split('')
        if (string[i] !== ' ') {
            string[i] =  str[i].toUpperCase()
            newArr.push(string.join(''))
        }
    }
   return newArr
}

//console.log(wave('hello'))
//console.log(wave('codewars'))
console.log(wave('two words'))