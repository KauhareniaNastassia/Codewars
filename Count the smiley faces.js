
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
console.log(countSmileys([':D',':~)',';~D',':)']));
console.log(countSmileys([':)',':(',':D',':O',':;']));

