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
--> '(2) ~~ (1) ~~ (3)'**Преобразовать массив**
Ваша задача - реализовать функцию transform(arr),
    которая принимает массив и возвращает преобразованный массив
на основе управляющих последовательностей, содержащихся в arr.
    Управляющие последовательности - это определенные строковые элементы
указанного массива:

    **--discard-next** исключает следующий элемент массива из преобразованного массива.
**--discard-prev** исключает предыдущий элемент массива из преобразованного массива.
**--double-next** удваивает следующий элемент массива в преобразованном массиве.
**--double-prev** удваивает предыдущий элемент массива в преобразованном массиве.

    Например:

transform ([1, 3, '--double-next', 4]) --> [1, 3, 4, 4]
transform ([1, 3, '--discard-prev', 4]) --> [1, 4]*/
