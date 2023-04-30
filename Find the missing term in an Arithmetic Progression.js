/*var findMissing = function (list) {
    for (let i = 1; i< list.length-1; i++) {
        if (Math.abs(list[i] - list[i-1]) < Math.abs(list[i] - list[i+1])) {
            return list[i] + Math.abs(list[i] - list[i-1])
        }
        if (Math.abs(list[i] - list[i-1]) > Math.abs(list[i] - list[i+1])) {
            return list[i] - Math.abs(list[i] - list[i+1])
        }
    }
}*/

/*var findMissing = function (list) {
    for (let i = 1; i< list.length-1; i++) {
        let diff = Math.abs(list[i] - list[i-1])
        if (list[i] + diff !== list[i+1]) {
            if (list[i] + diff < list[i+1]) {
                return list[i] + diff
            }
            if (list[i] + diff > list[i+1]) {
                return list[i] - (list[i+1] - list[i])
            }
        }
    }
}*/

var findMissing = function (list) {
    let diff = (list[list.length-1] - list[0]) / list.length

    for (let i = 1; i< list.length; i++) {
        if (list[i-1] + diff !== list[i]) {
            return list[i-1] + diff
        }
    }
}


console.log(findMissing([1, 3, 5, 9, 11]))
console.log(findMissing([1, 3, 4]))