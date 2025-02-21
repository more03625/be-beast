const doBinarySearch = (arr, target) => {

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        /*
            * const mid = (left + right) / 2; // This can cause int overflow. for large number.
        */

        const mid = left + ((right - left) / 2)
        const arrayOfMid = arr[mid];

        if (arrayOfMid === target) {
            return mid
        } else if (target < arrayOfMid) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return -1
}

const target = 6;

const arr = [1, 5, 6, 7, 8, 9, 10]
console.log('doBinarySearch ==>', doBinarySearch(arr, target))