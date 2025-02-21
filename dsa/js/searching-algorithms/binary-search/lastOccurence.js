const lastOccurrence = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    let ans;
    while (left <= right) {
        const mid = Math.floor(left + ((right - left) / 2));

        if (arr[mid] === target) {
            ans = mid;
            left = mid + 1
        } else if (target < arr[mid]) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return ans || -1
}

const arr = [1, 1, 2, 4, 4, 4, 5, 6, 6, 6];
const target = 9
console.log('lastOccurrence ==>', lastOccurrence(arr, target));
