/*
Банкоматы допускают 4 или 6-значные ПИН-коды,
    а ПИН-коды не могут содержать ничего, кроме 4 цифр или 6 цифр.

    Если функции передана правильная строка PIN,
    верните `true`, иначе верните `false`.

    Например:
correctPin('5567') --> true
correctPin('5432567') --> false*/

function correctPin(str) {
    let arr = str.split('')
    if (arr.length === 4 || arr.length === 6) {
        for (let el of arr) {
            let num = +el
            if (typeof num !== 'number') {
                return false
            }
        }
        return true
    } else {
        return false
    }
}

console.log(correctPin('5567'))
console.log(correctPin('5432567'))
