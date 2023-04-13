/*
Напишите функцию, которая возвращает сумму таким образом:

    Например:
        f(1)(2)(3) --> 6*/


function f(n1) {
    return function f2(n2) {
        return function f3(n3) {
            return n1 * n2 * n3
        }
    }
}

console.log(f(1)(2)(3))