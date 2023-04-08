/*//return the total number of smiling faces in the array
function countSmileys(arr) {

    if (arr.length === 0) {
        return []
    } else {
        let count = 0
        for (let i=0; i< arr.length; i++) {

            let item = arr[i].split('')
            switch (item.length) {
                case 2:
                    if (item[0] === ':' | item[0] === ';'
                        && item[1] === ')' | item[1] === 'D') {
                        count++
                    }
                    break;
                case 3:
                    if (item[0] === ':' | item[0] === ';'
                        && item[1] === '-' | item[1] === '~'
                        && item[2] === ')' | item[2] === 'D') {
                        count++
                    }
                    break;
            }
        }
        return count
    }

}
countSmileys([':D',':~)',';~D',':)'])
countSmileys([':)',':(',':D',':O',':;'])
/!*console.log(countSmileys([':D',':~)',';~D',':)']));
console.log(countSmileys([':)',':(',':D',':O',':;']));*!/*/

/*

function findNb(m) {

    let count = 0
    let n = 1

    while (m > 0) {
        m -= Math.pow(n, 3)
        n++
        count++
    }

    return (m === 0) ? count : -1

}


console.log(findNb(4183059834009))
console.log(findNb(24723578342962))*/


/*function formatDuration(seconds) {
    if (seconds === 0) {
        return 'now'
    } else {
        let year = Math.floor(seconds / 31536000)
        let day = Math.floor((seconds -= year * 31536000) / 86400)
        let hour = Math.floor((seconds -= day * 86400) / 3600)
        let min = Math.floor((seconds -= hour * 3600) / 60)
        let sec = seconds % 60

        let arr = []
        if (year === 1) {
            arr.push(`${year} year, `)
        } else if (year > 1) {
            arr.push(`${year} years, `)
        }

        if (day === 1) {
            arr.push(`${day} day, `)
        } else if (day > 1) {
            arr.push(`${day} days, `)
        }

        if (hour === 1) {
            if (min === 0) {
                arr.push(`${hour} hour`)
            } else {
                if (sec === 0) {
                    arr.push(`${hour} hour and `)
                } else {
                    arr.push(`${hour} hour, `)
                }
            }
        } else if (hour > 1) {
            if (min === 0) {
                arr.push(`${hour} hours`)
            } else {
                if (sec === 0) {
                    arr.push(`${hour} hours and `)
                } else {
                    arr.push(`${hour} hours, `)
                }
            }
        }

        if (min === 1) {
            if (sec === 0) {
                arr.push(`${min} minute`)
            } else {
                arr.push(`${min} minute and `)
            }
        } else if (min > 1) {
            if (sec === 0) {
                arr.push(`${min} minutes`)
            } else {
                arr.push(`${min} minutes and `)
            }
        }

        if (sec === 1) {
            arr.push(`${sec} second`)
        } else if (sec > 1) {
            arr.push(`${sec} seconds`)
        }
        return arr.join('')
    }
}


console.log(formatDuration(7093724))*/


function validBraces(braces) {
    let arr = []
    /*if (braces.length === 2) {
        if ((braces(0) === '(' && braces(1) === ')')
            || (braces(0) === '[' && braces(1) === ']')
            || (braces(0) === '{' && braces(1) === '}')) {
            return true
        }
            }*/

    for (let i = 0; i < braces.length; i++) {
        if (braces[i] === '(' || braces[i] === '[' || braces[i] === '{') {
            arr.push(braces[i])
        } else {
            if (!arr.length) {
                return false
            }

            let el = arr[arr.length - 1]

            if ((braces[i] === ')' && el === '(') || (braces[i] === ']' && el === '[') || (braces[i] === '}' && el === '{')) {
                arr.pop()
            } else break
        }
    }
    return !arr.length
}


console.log(validBraces("[(])"))




