function meeting(s) {

    let arr = s.toUpperCase().split(';')
    let newArr = arr.slice()

    for (let i = 0; i < newArr.length; i++) {
        newArr[i] = newArr[i].split(':').reverse()
    }

    newArr.sort()
    for (let i = 0; i < newArr.length; i++) {
        newArr[i] = '(' + newArr[i][0] + ', ' + newArr[i][1] + ')'
    }

    return newArr.join('')
}


console.log(meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"))
//console.log(meeting("Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn"))
//console.log(meeting("Alex:Arno;Alissa:Cornwell;Sarah:Bell;Andrew:Dorries;Ann:Kern;Haley:Arno;Paul:Dorny;Madison:Kern"))