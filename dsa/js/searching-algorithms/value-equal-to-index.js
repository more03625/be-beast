// Input: 
// N = 5
// Arr[] = {15, 2, 45, 12, 7}
// Output: 2
// Explanation: Only Arr[2] = 2 exists here.
// 
const valueEqualToIndex = (arr, arrayLength) => {
    console.log("arrayLength", arrayLength);
    let i, indexArray = [];
    for (i = 0; i < arr.length; i++) {
        if (arr.includes(i)) {
            indexArray.push(i);
        }
    }
    return indexArray[0];
}
let arr = [4, 3, 2, 1], arrayLength = arr.length - 1
arr.sort((a, b) => a - b)
console.log("Output ===> ", valueEqualToIndex(arr, arrayLength));