function parse( data ) {

    let arr = data.split('')
    let answer = []

    let num = 0
    for (let i = 0; i< arr.length; i++) {
        switch (arr[i]) {
            case 'i':
                num++
                break;
            case 'd':
                num--
                break;
            case 's':
                num = Math.pow(num, 2)
                break;
            case 'o':
                answer.push(num)
                break;
        }
    }

   return answer
}


console.log(parse("iiisdoso"))
console.log(parse("iiisxxxdoso"))