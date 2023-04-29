multiplicationTable = function (size) {

    let answer = []

    for (let i = 1; i < size + 1; i++) {
        let arr = []
        for (let j = i; j < size * i + 1; j += i) {
            arr.push(j)
        }

        answer.push(arr)
    }
    return answer
}


console.log(multiplicationTable(3))
console.log(multiplicationTable(5))