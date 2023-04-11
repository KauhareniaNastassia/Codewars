function queueTime(customers, n) {
    let newArr = new Array(n).fill(0)

    for (let i = 0; i < customers.length; i++) {
        let num =  Math.min(...newArr)
        let newNum = num + customers[i]

        newArr.splice(newArr.indexOf(num), 1, newNum)
    }
    return customers.length === 0 ? 0 : Math.max(...newArr)
}


//console.log(queueTime([1, 2, 3, 4], 1))
//console.log(queueTime([2, 2, 3, 3, 4, 4], 2))
//console.log(queueTime([1, 2, 3, 4, 5], 100))
console.log(queueTime([34,20,35,18,17,2,9,37,43,37,11,23,26,34,12,45,43,26,22,6], 4))
