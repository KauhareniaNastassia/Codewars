function nextBigger(n) {
    let str = n.toString()
    let newArr = []

    function* nextBigger(s) {
        if (s.length < 3) {
            yield s;
            if (s.length == 2) yield s[1] + s[0];
        } else {
            for (let i = 0; i < s.length; i++) {
                let h = s[i];
                for (let t of nextBigger(s.substring(0, i) +
                    s.substring(i + 1))) yield h + t;
            }
        }
    }

    for (let s of nextBigger(str)) {
        newArr.push(+s)
    }
    let finalArr = Array.from(new Set(newArr))
    let item = finalArr.sort().find(el => el === n)
    let answer = finalArr.find(el => finalArr.indexOf(el) === finalArr.indexOf(item) + 1)


    return answer === n ? -1 : answer
}


console.log(nextBigger(123456789))
/*console.log(nextBigger(2017))
console.log(nextBigger(513))
console.log(nextBigger(111))*/
