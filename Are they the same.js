function comp(array1, array2){

    if (!Array.isArray(array2) || !Array.isArray(array1) ) {return false}

    let newArray2=[]

    for (let i = 0; i< array2.length; i++) {
        let num = Math.sqrt(array2[i])
        if(!Number.isInteger(num)) {
            return false
        }
        newArray2.push(num)
    }

    array1.sort((a,b) => a-b)
    newArray2.sort((a,b) => a-b)
    let sum1 = array1.reduce((acc, res) => acc + res, 0)
    let sum2 = newArray2.reduce((acc, res) => acc + res, 0)

    return sum1 === sum2
}


comp( [121, 144, 19, 161, 19, 144, 19, 11],
    [121, 14641, 20736, 36100, 25921, 361, 20736, 361])

/*comp([121, 144, 19, 161, 19, 144, 19, 11] ,
    [132, 14641, 20736, 361, 25921, 361, 20736, 361])
console.log(comp([121, 144, 19, 161, 19, 144, 19, 11],
    [121, 14641, 20736, 361, 25921, 361, 20736, 361]))*/
console.log(comp([121, 144, 19, 161, 19, 144, 19, 11],
    [121, 14641, 20736, 36100, 25921, 361, 20736, 361]))
