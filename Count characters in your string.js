function count(string) {
    if (string.length === 0) {
        return {}
    }

    let sortedArray = string.split('').sort()
    let set = new Set(sortedArray)
    let arrayFromSet = Array.from(set)
    let arrOfCounts = []

    for (let i = 0; i < arrayFromSet.length; i++) {
        let filtered = sortedArray.filter(el => el === arrayFromSet[i])
        arrOfCounts.push(filtered.length)
    }

    let map = new Map()
    for (let i = 0; i < arrayFromSet.length; i++) {
        map.set(arrayFromSet[i], arrOfCounts[i])
    }

    let obj = Object.fromEntries(map.entries())

    return obj
}


console.log(count('aba'))
console.log(count('ABC'))
console.log(count(''))