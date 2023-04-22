function solution(input, markers) {
    let arr = input.split('\n')
    for (let i = 0; i< markers.length; i++) {
        for (let j=0; j < arr.length; j++) {
            let itemIndex = arr[j].indexOf(markers[i])
            if (itemIndex > -1) {
                arr[j] = arr[j].substring(0, itemIndex)
                if (arr[j].substring(arr[j].length - 1) === ' ') {
                    arr[j] = arr[j].substring(0, arr[j].length - 1)
                }
            }
        }

    }
    return arr.join('\n')
};


console.log(solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]))
console.log(solution("Q @b\nu\ne -e f g", ["@", "-"]))
