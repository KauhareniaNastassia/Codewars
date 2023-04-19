/*
Напишите функцию так, чтобы она разбивала оболочку camelCase,
    используя пробел между словами.

    Например:
"camelCasing"  -->  "camel Casing"

"identifier"  -->  "identifier"

"" -->  ""*/

function camelCasing(str) {
    for (let i = 0; i< str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            str[i] = ' ' + str[i]
        }
    }
    return str
}

console.log(camelCasing("camelCasing"))
console.log(camelCasing("identifier"))
console.log(camelCasing(""))
