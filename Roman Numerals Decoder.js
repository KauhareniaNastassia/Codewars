function solution(roman) {
    const rom = {
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1
    }
    let arr = Object.entries(rom)
    let romanArr = roman.split('')
    let count = 0

    for (let i = 0; i < romanArr.length; i++) {

        for (let j = 0; j < arr.length; j++) {

            let el = arr[j]
            if (romanArr[i] === el[0]) {
                if (arr[j] < arr[j+1]) {
                    count += Number(arr[j+1][1] - arr[j][1] )
                } else {
                    count += Number(el[1])
                }
            }
        }
    }
    return count
}


console.log(solution('IV'))
//console.log(solution('XXI'))
//console.log(solution('MMVIII'))
//console.log(solution('MDCLXVI'))