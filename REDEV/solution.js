/*
Напишите функцию, которая переделывает строку из camelCase в snake_case.

    Например:
solution("redevCourses") -> "redev_courses"*/


function solution(string) {

    let arr = string.split('')
    let newArr = arr.map(el=> el === el.toUpperCase() ? '_'+el.toLowerCase() : el)

  return newArr.join('')

}

console.log(solution("redevCourses"))