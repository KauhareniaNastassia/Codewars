function anagrams(word, arr) {

    let arrOfWord = word.split('').sort().join('')
    let finalArr = []
    console.log(arrOfWord)

    for (let i = 0; i < arr.length; i++) {
        let wordFromArray = arr[i].split('').sort().join('')
        if (arrOfWord === wordFromArray) {
            finalArr.push(arr[i])
        }
    }
    return finalArr
}


console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']))

//anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) --> ['aabb', 'bbaa']