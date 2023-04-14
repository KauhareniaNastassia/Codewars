function solution(number) {
    let m = Math.floor(number / 1000)
    let d = Math.floor((number - (m * 1000)) / 100)
    let x =  Math.floor((number - (m * 1000) - (d * 100))/10)
    let v = number - (m * 1000) - (d * 100) - (x*10)

    let arr = [d, x, v]

    let numeralCodes = [["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],         // Hundreds
        ["","X","XX","XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],   // Tens
        ["","I","II","III","IV","V","VI","VII","VIII","IX"]];        // Ones

    for (let i = 0; i< arr.length; i++) {
        let finded = numeralCodes[i].find(el => numeralCodes[i].indexOf(el) === arr[i])
        arr[i] = finded
}
    return 'M'.repeat(m) + arr.join('')
}


console.log(solution(22))
console.log(solution(11))
console.log(solution(1991))
console.log(solution(2007))