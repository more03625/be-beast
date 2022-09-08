//13) Kadane's Algo [V.V.V.V.V IMP]
const KadanesAlog = arr => { // return maximum sum subarray!.
    let n = arr.length, sum = 0, max = arr[0], i;

    for (i = 0; i < n; i++) {
        sum = sum + arr[i];
        // 0 > -1
        if (sum > max) {
            max = sum
        }

        if (sum < 0) {
            sum = 0
        }

    }
    return { max, sum };

}
// let arr = [1, 2, 3, -2, 5];
let arr = [-1, -2, -3, -4]
console.log("Sum of contigues sub array => ", KadanesAlog(arr))