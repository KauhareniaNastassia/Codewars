function titleCase(title, minorWords) {
    let arrOfTitle = title.toLowerCase().split(' ')
    let arrOfMinorWords = []

    if (minorWords) {
        arrOfMinorWords = minorWords.toLowerCase().split(' ')
    }
    let finalArr = [arrOfTitle[0].substring(0, 1).toUpperCase() + arrOfTitle[0].substring(1)]

    for (let i = 1; i < arrOfTitle.length; i++) {

        if (arrOfMinorWords.length === 0) {
            finalArr.push(arrOfTitle[i].substring(0, 1).toUpperCase() + arrOfTitle[i].substring(1))
        } else {

            if (arrOfMinorWords.find(el => el === arrOfTitle[i])) {
                finalArr.push(arrOfTitle[i])

            } else {
                finalArr.push(arrOfTitle[i].substring(0, 1).toUpperCase() + arrOfTitle[i].substring(1))
            }
        }
    }
    return finalArr.join(' ')
}


console.log(titleCase('a clash of KINGS', 'a an the of'))
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'))
console.log(titleCase('the quick brown fox'))