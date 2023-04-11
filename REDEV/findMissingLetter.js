function findMissingLetter(arr) {
    let alphabet = [...Array(26)].map((el, i) => (i+10).toString(36))
    let start = alphabet.find(el => el===arr[0])
    let finish = alphabet.find(el => el===arr[arr.length-1])
    let newArr = alphabet.splice(alphabet.indexOf(start), alphabet.indexOf(finish)+1)

    for (let i= 0; i < newArr.length; i++) {

        if( newArr[i] !== arr[i]) {
            return newArr[i]
        }
    }
}


console.log(findMissingLetter(['a','b','c','d','f']))

