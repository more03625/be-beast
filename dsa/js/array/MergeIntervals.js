// 14) Merge Intervals
const mergeIntervals = intervals => {
    if (intervals.length === 1 || intervals.length === 0) {
        return intervals;
    }

    let sortedInterval = intervals.sort(([a1, b1], [a2, b2]) => (a1 - a2)); //  Sort
    console.log(sortedInterval)
    const output = [];
    let cur = sortedInterval.shift(), i = -1 //Shift (remove) the first element of the array:
    // console.log("Cur ===> ", cur) [1,3]
    while (cur) {
        const prev = output[i] // undefined, [1, 3], [1, 6], [8, 10]

        if (prev && cur[0] <= prev[1]) {
            output[i] = [prev[0], Math.max(cur[1], prev[1])]; //i = 0
        } else {
            // console.log(++i)
            // output[0] = cur
            // output[2] = cur
            // output[4] = cur
            output[++i] = cur; // cur = [1, 3],[8, 10], [15, 18]
        }
        cur = intervals.shift();
        // console.log("cur ===> ", cur) //[2, 6], [8, 10], [15, 18]
    }
    return output;


}
let inter = [[1, 3], [2, 6], [8, 10], [15, 18]];

console.log(mergeIntervals(inter))