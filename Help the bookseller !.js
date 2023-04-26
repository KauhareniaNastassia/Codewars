function stockList(listOfArt, listOfCat){

    let arrOfArt = []
    let arrOfNums = []
let finalArr = []
    for (let i = 0; i < listOfArt.length; i++) {
        arrOfArt.push(listOfArt[i].split(' ')[0])
        arrOfNums.push(listOfArt[i].split(' ')[1])
    }


    console.log(arrOfArt)
    console.log(arrOfNums)


}


console.log(stockList(["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"], ["A", "B", "C", "D"]))
console.log(stockList(["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"],  ["A", "B", "C", "W"]))