function solution(roman) {
    let numeralCodes = [
                        ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],         // Hundreds
                        ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],          // Tens
                        ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]];        // Ones


}


console.log(solution('XXI'))
console.log(solution('MMVIII'))
console.log(solution('MDCLXVI'))