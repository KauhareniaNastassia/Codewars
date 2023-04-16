/*
Напишите функцию capitalizeFirstLetter(str),
    которая преобразовывает первый символ строки в верхний регистр.*/


function capitalizeFirstLetter(str) {
    return str.substring(0,1).toUpperCase() + str.substring(1)
}


console.log(capitalizeFirstLetter('напишите функцию capitalizeFirstLetter(str)'))
