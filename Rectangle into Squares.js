function sqInRect(lng, wdth){
    if (lng === wdth) return null

    let arrOfSqrs = []

    while (lng !== wdth) {
        let smaller = lng < wdth ? lng : wdth
        let bigger = lng > wdth ? lng : wdth
        arrOfSqrs.push(smaller)
        lng = smaller
        wdth = bigger - smaller
        console.log(lng, wdth)
    }
    arrOfSqrs.push(lng)
    return arrOfSqrs
}


//console.log(sqInRect(5, 5))
//console.log(sqInRect(5, 3))
console.log(sqInRect(20, 14))