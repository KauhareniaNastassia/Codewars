function orderWeight(strng) {

    let arr = strng.split(' ')
    let arrOfSum = []
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i].split('')
        let sum = item.reduce((acc, res) => +acc + +res)
        arrOfSum.push(sum)
    }
    let newArr = []

    function func(arrOfSum) {
        let find = arrOfSum.filter(el => el === Math.min(...arrOfSum))

        if (find.length === 1) {
            let indexOfMin = arrOfSum.indexOf(find[0])
            newArr.push(arr[indexOfMin])
            arr.splice(indexOfMin, 1)
            arrOfSum.splice(indexOfMin, 1)
        } else {
            let arrOfRepeats = []
            for (let i = 0; i < find.length; i++) {
                let indexOfMin = arrOfSum.indexOf(find[i])
                arrOfRepeats.push(arr[indexOfMin])
                arr.splice(indexOfMin, 1)
                arrOfSum.splice(indexOfMin, 1)
            }
            arrOfRepeats.sort()
            newArr.push(...arrOfRepeats)
        }
    }

    while (arrOfSum.length > 0) {
        func(arrOfSum)
    }
    return newArr.join(' ')
}


console.log(orderWeight("56 65 74 100 99 68 86 180 90"))
console.log(orderWeight("103 123 4444 99 2000"))