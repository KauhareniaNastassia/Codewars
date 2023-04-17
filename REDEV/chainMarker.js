/*

Ваша задача - создать объект chainMaker, который создает цепочки.
    Готовая цепочка представляет собой строку
и выглядит так: '(значение1) ~~ (значение2) ~~ (значение3)'.
    В ChainMaker есть несколько методов для создания цепочек и их изменения:

    getLength: возвращает текущую длину цепочки в виде числа;
addLink (value) добавляет в цепочку ссылку, содержащую строковое представление значения;
removeLink (position) удаляет звено цепи в указанной позиции;
reverseChain: переворачивает цепочку;
finishChain: завершает цепочку и возвращает ее.

    Методы addLink, reverseChain и removeLink объединяются в цепочку, а другие - нет.
    Если addLink вызывается без аргументов,
    он добавляет в цепочку пустую ссылку ('()').
    Если removeLink принимает недопустимую позицию
(например, не число или дробное число, или соответствует несуществующей ссылке),
он должен выдать ошибку.
    После вызова метода finishChain существующую цепочку необходимо удалить,
    как если бы возникла ошибка.

    Например:
chainMaker.addLink(1).addLink(2).addLink(3).finishChain()
--> '(1) ~~ (2) ~~ (3)'
chainMaker.addLink(1).addLink(2).removeLink(1).addLink(3).finishChain()
--> '(2) ~~ (3)'
chainMaker.addLink(1).addLink(2).reverseChain().addLink(3).finishChain()
--> '(2) ~~ (1) ~~ (3)'
*/


let chainMaker = {
    chain: [],
    getLength() {
        return this.chain.length
    },
    addLink(value) {
        let link = '( )'
        if (value) {
            link = '(' + value + ')'
        }
        this.chain.push(link)
        return this
    },
    removeLink(position) {
        if (position < 1 || position > this.getLength()) {
            throw Error
        } else {
            this.chain.splice(position - 1, 1)
            return this
        }
    },
    reverseChain() {
        this.chain.reverse()
        return this
    },
    finishChain() {
        let finalResult = this.chain.join('~~')
        this.chain = []
        return finalResult
    }
}

console.log(chainMaker.addLink(1).addLink(2).addLink(3).finishChain())