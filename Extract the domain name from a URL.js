function domainName(url){
    let str1 = 'http://'
    let str2 = 'https://'
    let str3 = 'www.'
    if (url.includes(str1)) {
        url = url.replace(str1, '')
    }
    if (url.includes(str2)) {
        url = url.replace(str2, '')
    }
    if (url.includes(str3)) {
        url = url.replace(str3, '')
    }
   return url.substring(0, url.indexOf('.'))
}


console.log(domainName("http://github.com/carbonfive/raygun"))
console.log(domainName("http://www.zombie-bites.com"))
console.log(domainName("www.xakep.ru"))
console.log(domainName("https://youtube.com"))