// Find first and last positions of an element in a sorted array

// naive approach
const lastOccuranceOfX = (arr, arrLength, x) => {
    let i, first = -1, last = -1
    for (i = 0; i < arrLength; i++) {
        if (arr[i] === x) {
            if (first === -1) {
                first = i;
            }
            last = i;
        }
    }
    if (first !== -1) {
        return [first, last]
    } else {
        return [-1, -1]
    }
}
// Using Binary Search
// let arr = [1, 3, 5, 5, 5, 5, 67, 123, 125], arrLength = arr.length, x = 5, searchElement = 5
// let middle = Math.floor(arrLength / 2);

// if (arr[middle] > searchElement) {
//     // Suppose Mid = 67, SE:- 5
//     // 67 > 5 : YES : now elements after 67 is obivo greater than 67 so our SE present at left

//     // Search in Left array.
// } else if (arr[middle] < searchElement) {
//     // Suppose Mid = 67, SE:- 125
//     // 67 > 125 ? NO. Search in Right array.

// } else if (arr[middle] === searchElement) {

// } else {
//     return -1
// }
// console.log(lastOccuranceOfX(arr, arrLength, x));