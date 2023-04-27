function partsSums(ls) {

    let arr = []
    let arrOfLs = ls.slice().reverse()

    while (arrOfLs.length > 0) {
        arr.push(arrOfLs.reduce((acc, res) => acc + res, 0))
        arrOfLs.pop()
    }
    if (arrOfLs.length === 0) {
        arr.push(0)
    }

        return arr
}


console.log(partsSums([1, 2, 3, 4, 5, 6]))
console.log(partsSums([744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]))