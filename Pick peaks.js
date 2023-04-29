function pickPeaks(arr){
    let obj = {pos:[],peaks:[]}

    if (arr.every(el => el === arr[0]) || arr.length === 0) {
        return obj
    }

    let pos = []
    let peak = []

    for (let i = 1; i< arr.length-1; i++) {

        if (arr[i]>arr[i-1] && arr[i]>arr[i+1]){
            pos.push(i)
            peak.push(arr[i])
        }
        if (arr[i]===arr[i+1] && arr[i+1]>arr[i+2]){
            pos.push(i)
            peak.push(arr[i])
        }
        if (arr[i]===arr[i-1] && arr[i]===arr[i+1] && arr[i-2]<arr[i-1]){
            pos.push(i-1)
            peak.push(arr[i])
            i+=2
        }
    }

    obj.pos = pos.slice()
    obj.peaks = peak.slice()

    return obj
}


console.log(pickPeaks([2,1,3,1,2,2,2,2]))
console.log(pickPeaks([1,2,5,4,3,2,3,6,4,1,2,3,3,4,5,3,2,1,2,3,5,5,4,3]))
console.log(pickPeaks([2,1,3,2,2,2,2,5,6]))
console.log(pickPeaks([3,2,3,6,4,1,2,3,2,1,2,2,2,1]))