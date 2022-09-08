//2) Find the maximum and minimum element in an array
const minMaxInArray = (arr) => {

    let minMax = new Array();
    console.log('minMax ======> ', minMax);
    if (arr.length === 1) {
        minMax.min = arr[0];
        minMax.max = arr[0];
        return minMax
    }

    if (arr.length === 0) {
        return { err: 'Array cannot be empty!' }
    }

    // Now initialize min & max of the first 2 elemtnts

    if (arr[0] > arr[1]) {
        minMax.max = arr[0];
        minMax.min = arr[1];
    } else {
        minMax.max = arr[1];
        minMax.min = arr[0];
    }
    // Now check for rest of the element!
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] > minMax.max) {
            minMax.max = arr[i]
        } else if (arr[i] < minMax.min) {
            minMax.min = arr[i]
        }
    }
    return minMax
}
console.log(minMaxInArray([1, 3000, 50000, 0, -1, 6521346, -2]))
// Time Complexity: O(n)
// Best Case : When elements are sorted in ascending order. [1,2,3,4]
// Worst Case : When elements are sorted in descending order.Eg: [4,3,2,1]