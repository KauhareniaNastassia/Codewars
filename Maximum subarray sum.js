var maxSequence = function(arr){
    let newArr = []

    for (let i = 0; i< arr.length; i++) {
        let sum = arr[i]
        for (let j = i+1; j< arr.length; j++) {
            sum += arr[j]
            newArr.push(sum)
        }
    }
    return arr.length === 0 || !arr.find(el => el > 0) ? 0 : Math.max(...newArr)
}


//console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
console.log(maxSequence([-2,-1,-3,-4,-1,-2,-1,-5,-4]))