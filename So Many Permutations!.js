function permutations(string) {

    let newArr = []
    function* perm(str) {
        if (str.length < 3) {
          yield str
            if (str.length === 2) {
                yield str[1] + str[0]
            }
        } else {
            for (let i = 0; i< str.length; i++) {
                let h = str[i];
                for (let t of perm(str.substring(0, i) + str.substring(i + 1))) {
                    yield h + t
                }
            }
        }
    }
    for (let str of perm(string)) {
        newArr.push(str)
    }


    return Array.from(new Set(newArr))
}


console.log(permutations('a'))
console.log(permutations('ab'))
console.log(permutations('aabb'))