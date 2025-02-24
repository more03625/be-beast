const singleElement = (arr) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor(left + ((right - left) / 2))

        if (arr[mid] !== arr[mid - 1] && arr[mid] !== arr[mid + 1]) {
            return arr[mid]
        }

        if ((mid % 2 === 1 && arr[mid] === arr[mid - 1]) || (mid % 2 === 0 && arr[mid] === arr[mid + 1])) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return -1
}

const arr = [1, 1, 2, 3, 3, 4, 4, 8, 8]; // ODD

// const arr = [1, 1, 2, 2, 3, 4]; EVEN
console.log('singleElement ===>', singleElement(arr));
