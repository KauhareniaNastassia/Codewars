function bouncingBall(h, bounce, window) {
    if (h < 0 || bounce <= 0 || bounce >= 1 || window >= h) {
        return -1
    }

    let height = h
    let count = 0

    function counter() {
        height = height * bounce
        height > window ? count +=2 : count +=1
    }

    while (height > window) {
        counter()
    }
    return count
}

console.log(bouncingBall(3.0, 0.66, 1.5))
console.log(bouncingBall(30.0, 0.66, 1.5))
console.log(bouncingBall(3.0, 1.0, 1.5))