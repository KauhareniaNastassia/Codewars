String.prototype.camelCase=function(){
    let arr = this.split(' ')
    let finalArr = []
    for (let item of  arr) {
        finalArr.push( item.substring(0, 1).toUpperCase() + item.substring(1))
    }
    return finalArr.join('')
}


console.log("test case".camelCase())
console.log("camel case word".camelCase())
console.log("".camelCase())