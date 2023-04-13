/*Напишите функцию `expand(arr)`, которая разворачивает
вложенный массив любой глубины.

    Например:
const arr1 = [1, [2,[3,[4]]]]; --> [1,2,3,4];
const arr2 = [1, [2], [3, [[4]]],[5,6]]; --> [1,2,3,4,5,6];*/



function func(arr){
    let newArr = []
    arr.forEach(function(el) {
        if (Array.isArray(el)) {
            newArr = newArr.concat(func(el))
        }
        else {
            newArr.push(el)
        }
    })
    return newArr
}

console.log(func([1, [2,[3,[4]]]]))

