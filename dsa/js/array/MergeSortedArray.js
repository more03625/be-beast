// https://practice.geeksforgeeks.org/problems/minimum-number-of-jumps-1587115620/1

const mergeSortedArrays = (arr1, arr2) => {
    let mergedArray = [...arr1, ...arr2];
    return mergedArray.sort();
}
let arr1 = [1, 3, 5, 7], arr2 = [0, 2, 6, 8, 9]
console.log(mergeSortedArrays(arr1, arr2))