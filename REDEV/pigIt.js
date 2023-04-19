/*
Переместите первую букву каждого слова в его конец,
    затем добавьте «ау» в конец слова. Не трогайте знаки препинания.

    Например:
pigIt('Pig latin is cool') --> 'igPay atinlay siay oolcay'
pigIt('This is my string') --> 'hisTay siay ymay tringsay'*/


function pigIt(str) {
    let arr= str.split(/(\W+)/).filter(el => el !== ' ')
    let newArr= []
    for (let item of arr) {
        if ( !item.match(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g)) {
            newArr.push(item.substring(1) + item.substring(0, 1) + 'ay')
        } else {
            newArr.push(item)
        }
    }
    return newArr.join(' ')

}

console.log(pigIt('Pig latin is cool'))
console.log(pigIt('This, is my string'))