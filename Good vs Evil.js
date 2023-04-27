function goodVsEvil(good, evil){

    let arrOfGood = good.split(' ')
    let arrOfEvil = evil.split(' ')

    let sumOfGoods = arrOfGood.reduce((acc, res) => +acc + +res, 0)
    let sumOfEvils = arrOfEvil.reduce((acc, res) => +acc + +res, 0)


    return sumOfGoods > sumOfEvils ? 'Battle Result: Good triumphs over Evil' :
        sumOfGoods < sumOfEvils ? 'Battle Result: Evil eradicates all trace of Good' : 'Battle Result: No victor on this battle field'
}


console.log(goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'))
console.log(goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0'))
console.log(goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0'))