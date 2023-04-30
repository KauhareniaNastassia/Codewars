function dblLinear(n) {
    let arr = [1]
    let y = 0
    let z = 0

    for (let i = 0; i < n; i++) {
        let nextY = 2 * arr[y] + 1
        let nextZ = 3 * arr[z] + 1
        if (nextY <= nextZ) {
            arr.push(nextY)
            y++
            if (nextY == nextZ) {
                z++
            }
        } else {
            arr.push(nextZ)
            z++
        }
    }
    return arr[n]
}


console.log(dblLinear(100))
console.log(dblLinear(20))