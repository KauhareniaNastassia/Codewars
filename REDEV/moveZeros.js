function moveZeros(arr) {

    let newArr = []
    let arrOfZeros = []

    for (let i = 0; i< arr.length; i++) {
        if (arr[i] === 0) {
            arrOfZeros.push(arr[i])
        } else {
            newArr.push(arr[i])
        }
    }
    return newArr.concat(arrOfZeros)
}


console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))
