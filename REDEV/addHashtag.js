/*
Маркетинговая команда тратит слишком много времени на ввод хэштегов.
    Давайте поможем им с нашим собственным генератором хештегов!
    Он должен начинаться с хэштега (#).
Все слова должны начинаться с заглавной буквы.
    Если окончательный результат длиннее 140 символов, он должен вернуть false.
    Если ввод или результат - пустая строка, он должен вернуть false.

    Например:
" Hello there thanks for trying my Kata"  -->  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "   -->  "#HelloWorld"
""  -->  false*/


function addHashtag(str) {
    if (str.length === 0) return false
    let arr = str.split(' ').filter(el => el !== '')
    let res = '#'
    for (let el of arr) {
        res += el.substring(0, 1).toUpperCase() + el.substring(1)
    }
    return res.length > 140 || res.length === 0 ? false : res
}

console.log(addHashtag(" Hello there thanks for trying my Kata"))
console.log(addHashtag("    Hello     World   "))
console.log(addHashtag(''))