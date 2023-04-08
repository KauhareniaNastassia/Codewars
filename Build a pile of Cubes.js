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
console.log(findNb(24723578342962))

