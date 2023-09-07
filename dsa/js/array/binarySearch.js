// Success Full Binary Search

const iterativeBinarySearch = (array, searchElement) => {
    let low = 0, high = array.length - 1, mid = 0;
    while (low <= high) {
    console.log(low, high)

        mid = (low + high) / 2
        if (searchElement === array[mid]) {
            return mid;
        } else if (searchElement < array[mid]) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return -1;
}

const main = (array, searchElement) => {
    const index = iterativeBinarySearch(array, searchElement);

    if (index >= 0) {
        return `Search Element found at index ${index}`
    } else {
        return `Search Element not present in the given array!`
    }
}

const array = [4, 8, 10, 15, 18, 21, 24, 27, 29, 33, 34, 37, 39, 41, 43]
const searchElement = 43;
console.log(main(array, searchElement));