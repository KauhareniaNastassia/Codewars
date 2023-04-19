/*
Вам предоставляется массив (который будет иметь длину не менее 3,
    но может быть очень большим),
содержащий целые числа. Массив либо полностью состоит из нечетных целых чисел,
    либо полностью состоит из четных целых чисел,
    за исключением одного целого числа N.
    Напишите метод, который принимает массив в качестве аргумента и возвращает
этот «выброс» N.

    Например:
findOutlier([0, 1, 2]) --> 1
findOutlier([1, 2, 3]) --> 2
findOutlier([2,6,8,10,3]) --> 3
findOutlier([1,1,0,1,1]) --> 0*/

function findOutlier(arr) {
    let arrOfOdds = arr.filter(el => el % 2 !== 0)
    let arrOfEven = arr.filter(el => el % 2 === 0)
    return arrOfOdds.length === 1 ? arrOfOdds[0] : arrOfEven[0]
}

console.log(findOutlier([1, 2, 3]))
console.log(findOutlier([0, 1, 2]))
console.log(findOutlier([2,6,8,10,3]))
console.log(findOutlier([1,1,2,1,1]))

