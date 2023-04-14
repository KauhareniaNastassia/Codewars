function twoSum(numbers, target) {
   let arr = []
    for (let i = 0; i< numbers.length; i++) {

        for (let j=i+1; j< numbers.length; j++) {
            let sum = numbers[i] + numbers[j]
            if (sum === target) {
                arr.push(i, j)
            }
        }
    }
    return arr.slice(0, 2)
}


console.log(twoSum([1,2,3], 4))
console.log(twoSum([1234,5678,9012], 14690))
console.log(twoSum([2,3,1], 4))