function inArray(array1,array2){
    let set = new Set()
    for (let i=0; i<array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {

            if (array2[j].includes(array1[i])) {
                set.add(array1[i])
            }
        }
    }
    return Array.from(set).sort((a, b) => a.localeCompare(b))
}


console.log(inArray(["live", "strong", "arp"], ["lively", "alive", "harp", "sharp", "armstrong"]))
//console.log(inArray(["xyz", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]))
//console.log(inArray(["tarp", "mice", "bull"], ["lively", "alive", "harp", "sharp", "armstrong"]))