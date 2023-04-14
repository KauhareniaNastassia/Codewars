/*
Создайте метод объекта `String endsWith()`, который сравнивает
подстроку str1 с окончанием исходной строки str и определяет,
    заканчивается ли строка символами подстроки.

    Например:
const str = "Каждый охотник желает знать";
const str1 = "скрипт";
const str2 = "знать";

String.prototype.endsWith = function(substring) {};

str.endsWith(str1)) -->  false
str.endsWith(str2)) -->  true*/


const str = "Каждый охотник желает знать";

String.prototype.endsWith = function(substring) {

    if (substring.length > this.length) {
        return false
    } else {
        return this.substring(this.length - substring.length) === substring
    }

}

console.log(str.endsWith("скрипт"))
console.log(str.endsWith("знать"))