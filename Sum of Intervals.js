function sumIntervals(intervals) {
        return Object.keys(intervals.reduce(
            function(hash, interval) {
                for(let i = interval[0]; i < interval[1]; i++) hash[i] = 1;
                console.log(hash)
                return hash;
        }, {})).length;

}

console.log(sumIntervals(
    [[1, 5],
        [6, 10]]))
/*console.log(sumIntervals(
    [[0, 20],
    [-100000000, 10],
    [30, 40]]))*/
console.log(sumIntervals(
    [[1, 5],
    [10, 20],
    [1, 6],
    [16, 19],
    [5, 11]]
))


