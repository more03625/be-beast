const firstOccurrenceFromLeft = (arr, target) => {

    let left = 0, right = arr.length - 1;

    let ans;
    while (left <= right) {
        const mid = Math.floor(left + ((right - left) / 2));

        if (arr[mid] === target) {
            ans = mid
            right = mid - 1
        } else if (target < arr[mid]) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return ans
}

const arr = [1, 1, 2, 4, 4, 4, 5, 6, 6, 6];
const target = 4
console.log('firstOccurrenceFromLeft ==>', firstOccurrenceFromLeft(arr, target));
