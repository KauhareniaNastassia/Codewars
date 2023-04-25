function mix(s1, s2) {
    let arr1 = s1.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s{2,}/g, " ").split('').filter(el => el !== ' ').filter(el => el !== el.toUpperCase()).sort()
    let arr2 = s2.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s{2,}/g, " ").split('').filter(el => el !== ' ').filter(el => el !== el.toUpperCase()).sort()

    let setArr = Array.from(new Set(arr1.concat(arr2).sort()))
    let answer1 = []
    let answer2 = []
    let equalAnswers = []

    for (let i = 0; i < setArr.length; i++) {

        let filtered1 = arr1.filter(el => el === setArr[i])
        let filtered2 = arr2.filter(el => el === setArr[i])

        if (filtered1.length > 1 || filtered2.length > 1) {
            if (filtered1.length === filtered2.length) {
                equalAnswers.push(`=:${setArr[i].repeat(filtered1.length)}`)
            } else {
                filtered1.length > filtered2.length ?
                    answer1.push(`1:${setArr[i].repeat(filtered1.length)}`)
                    : answer2.push(`2:${setArr[i].repeat(filtered2.length)}`)
            }
        }
    }
    let finalAnswer = answer1.concat(answer2).concat(equalAnswers)

    return finalAnswer.sort().sort((a, b) => b.length - a.length).join('/')
}


//console.log(mix("Are they here", "yes, they are here"))
//console.log(mix("looping is fun but dangerous", "less dangerous than coding"))
console.log(mix("my&friend&Paul has heavy hats! &", "my friend John has many many friends &"))