function longestConsec(strarr, k) {

    if (strarr.length === 0 || k > strarr.length || k <= 0) {
        return ''
    }

    let arr = []

    for (let i = 0; i < strarr.length - (k - 1); i++) {
        let newArr = [...strarr]
        let word = newArr.splice(i, k).join('')
        arr.push(word)
    }

    let num = arr.find(el => el.length === Math.max(...(arr.map(el => el.length))))
    return num
}

//longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)
//longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3)
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2));
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3));
