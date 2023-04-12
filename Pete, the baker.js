function cakes(recipe, available) {
    let keysOfRecipe = Object.keys(recipe)
    let keysOfAvailable = Object.keys(available)
    let count = Infinity

    if (!keysOfRecipe.every(el => keysOfAvailable.includes(el))) {
        return 0
    }

    keysOfRecipe.forEach(key => {
        if (available[key] / recipe[key] <= count) {
            count = available[key] / recipe[key]
        }
    })

    return Math.floor(count)
}


console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}))
console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}))