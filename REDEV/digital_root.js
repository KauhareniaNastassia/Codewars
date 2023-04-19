/*
Для данного n возьмите сумму цифр n.
    Если это значение имеет более одной цифры,
    продолжайте уменьшать таким образом, пока
не будет получено однозначное число.
    Входными данными будет неотрицательное целое число.

    Например:
digital_root(16)  -->  1 + 6 = 7
digital_root(942)  --> 9 + 4 + 2 = 15  -->  1 + 5 = 6
digital_root(132189) -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
digital_root(493193)  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2*/


function digital_root(num) {
    let item = num

    function sum() {
        let arr = item.toString().split('')
        item = arr.reduce((acc, res) => Number(acc) + Number(res), 0)
    }

    while (item.toString().length > 1) {
        sum()
    }
    return item
}

console.log(digital_root(16))
console.log(digital_root(942))
console.log(digital_root(132189))
console.log(digital_root(493193))