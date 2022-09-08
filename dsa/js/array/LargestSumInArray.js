// 8) find Largest sum contiguous Subarray [V. IMP]
// 7) Write a program to cyclically rotate an array by one. & Also by k steps
const largestSumInArray = (arr, n) => {
    let sum = 0, max = arr[0]

    for (let i = 0; i < n; i++) {
        sum += arr[i];
        if (sum > max) {
            max = sum;
        }
        if (sum < 0) {
            sum = 0 // Reset to `0`
        }
    }
    return max;
}
let arr = [-2, -3, 4, -1, -2, 1, 5, -3], n = arr.length;
console.log(largestSumInArray(arr, n))