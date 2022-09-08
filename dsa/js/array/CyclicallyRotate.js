// 7)Write a program to cyclically rotate an array by one. & Also by k steps
const cyclically = (arr, n, k) => { // Brute Force
    let temp, i, count = 0;

    while (count < k) { // K Should be always greater
        temp = arr[n - 1];
        for (i = n - 1; i >= 1; i--) {
            arr[i] = arr[i - 1]
            // arr[4] = arr[3]
            // arr[3] = arr[2]
            // arr[2] = arr[1]
            // arr[1] = arr[0]
            // run till i is Greater or equal to 1
        }
        arr[0] = temp;
        count++
    }
    return arr;
}
// let arr = [1, 2, 3, 4, 5], arrayLength = arr.length, k = 3
// console.log(cyclically(arr, arrayLength, k));

// TC: O(n * k)
const reverseHalfArray = (start, end, arr) => {
    let temp;
    while (start < end) {
        temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp;

        start++
        end--
    }
    return arr;
}
const rotateArray = (arr, n, k) => {

    if (k > n) { // if k is Greater than array size ? take a mod, because if arr [1,2,3] if you rotate it by 2 times or 5 times the results will be same
        k = k % n
    }

    reverseHalfArray(0, n - k - 1, arr) // [3, 2, 1, 4, 5, 6]
    reverseHalfArray(n - k, n - 1, arr) // [3, 2, 1, 6, 5, 4]
    console.log(n - k, n - 1, arr);
    return reverseHalfArray(0, n - 1, arr) // [3, 2, 1, 6, 5, 4]
}
let arr = [1, 2, 3, 4, 5, 6, 7], arrayLength = arr.length, k = 2

console.log(rotateArray(arr, arrayLength, k))