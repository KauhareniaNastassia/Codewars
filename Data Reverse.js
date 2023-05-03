function dataReverse(data) {
    let newArr = []
    while( data.length>0) {
        newArr.unshift(data.splice(0, 8).join(''))
    }
    return newArr.join('').split('').map(el => +el)
}


console.log(dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]))
console.log(dataReverse([0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1]))