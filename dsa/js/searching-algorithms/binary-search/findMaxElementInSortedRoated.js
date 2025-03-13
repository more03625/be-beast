const findMaxElementInSortedRotated = (arr) => {
    let left = 0;
    let right = arr.length - 1;
    let maxElement = 0

    while (left < right) {

        const mid = Math.floor(left + (right - left) / 2);

        if (arr[mid] < arr[right]) {
            right = mid
        } else {
            left = mid + 1
        }
    }

    const pivot = left;

    if (pivot === 0) {
        maxElement = arr[arr.length - 1]
    } else {
        maxElement = arr[pivot - 1]
    }

    return maxElement
}

console.log('findMaxElementInSortedRotated([30, 40, 50, 10, 20]) =>', findMaxElementInSortedRotated([30, 40, 50, 10, 20]));
