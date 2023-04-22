function score(dice) {
    let arr = []
    for (let i = 1; i < 7; i++) {
        arr.push(i)
    }
    let score = 0

    for (let i = 0; i < arr.length; i++) {
        let arrOfNum = dice.filter(el => el === arr[i])

            while (arrOfNum.length > 0) {
                let dividedArr =arrOfNum.splice(0, 3)

                switch (dividedArr.length) {
                    case 1:
                        if (dividedArr[0] === 1) {
                            score += 100
                        }
                        if (dividedArr[0] === 5) {
                            score += 50
                        }
                        break;
                    case 2:
                        if (dividedArr[0] === 1) {
                            score += 2 * 100
                        }
                        if (dividedArr[0] === 5) {
                            score += 2 * 50
                        }
                        break;
                    case 3:
                        if (dividedArr[0] === 1) {
                            score += 1000
                        } else {
                            score += dividedArr[0] * 100
                        }
                        break;
                }
            }
    }
    return score
}


console.log(score([5, 1, 3, 4, 1]))
console.log(score([1, 1, 1, 3, 1]))
console.log(score([4, 4, 4, 3, 3]))
console.log(score([2, 4, 4, 5, 4]))