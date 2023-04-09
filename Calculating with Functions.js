function zero(func) {
    if (func == null) {
        return 0
    } else {
        return func(0)
    }
}
function one(func) {
    if (func == null) {
        return 1
    } else {
        return func(1)
    }
}
function two(func) {
    if (func == null) {
        return 2
    } else {
        return func(2)
    }
}
function three(func) {
    if (func == null) {
        return 3
    } else {
        return func(3)
    }
}

function four(func) {
    if (func == null) {
        return 4
    } else {
        return func(4)
    }
}
function five(func) {
    if (func == null) {
        return 5
    } else {
        return func(5)
    }
}
function six(func) {
    if (func == null) {
        return 6
    } else {
        return func(6)
    }
}
function seven(func) {
    if (func == null) {
        return 7
    } else {
        return func(7)
    }
}
function eight(func) {
    if (func == null) {
        return 8
    } else {
        return func(8)
    }
}

function nine(func) {
    if (func == null) {
        return 9
    } else {
        return func(9)
    }
}

function plus(a) {
    return function (res) {
        return res + a
    }
}
function minus(a) {
    return function (res) {
        return res - a
    }
}
function times(a) {
    return function (res) {
        return res * a
    }
}
function dividedBy(a) {
    return function (res) {
        return Math.floor(res / a)
    }
}




console.log(four (plus (nine ())))