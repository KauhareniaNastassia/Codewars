/*function cleanString(s) {

    let arr = s.split('')

    while(arr.find(el => el ==='#')) {
        for (let i = 0; i< arr.length; i++) {
            if( arr[i] === '#' && arr[i-1] !== '#') {
                arr.splice(i-1, 2)
            }
        }
    }

    return arr.join('')
}*/

function cleanString(s) {

    let arr = s.split('').reduce((res, c) => c == '#' ? res.slice(0, -1) : res + c, '')
    return arr
}


console.log(cleanString('abc#d##c'))
console.log(cleanString('abc####d##c#'))