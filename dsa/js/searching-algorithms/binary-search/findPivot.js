// Pivot: Lowest element of the array using binary search

const getPivotElement = (arr) => {
    let left = 0;
    let right = arr.length - 1

    while (left < right) {
        const mid = Math.floor(left + ((right - left) / 2));

        if (arr[mid] < arr[right]) {
            right = mid
        } else {
            left = mid + 1
        }
    }

    return left
}

console.log('======>', getPivotElement([30, 40, 50, 10, 20]));
