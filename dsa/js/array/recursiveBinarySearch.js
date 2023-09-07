const recursiveBinarySearch = (array, searchElement, low, high) => {
    let mid = ((low + high) / 2)
    console.log(low, high, mid, searchElement)

    if (low <= high) {
        if (searchElement === array[mid]) {
            return mid;
        } else if (searchElement < array[mid]) {
            return recursiveBinarySearch(array, searchElement, low, (mid - 1))
        } else {
            return recursiveBinarySearch(array, searchElement, (mid + 1), high)
        }
    }
    return -1;
}

const main = (array, searchElement) => {
    const low = 0;
    const high = array.length - 1
    const response = recursiveBinarySearch(array, searchElement, low, high);
    return response;
}

const array = [4, 8, 10, 15, 18, 21, 24, 27, 29, 33, 34, 37, 39, 41, 43];
const searchElement = 29;
console.log(main(array, searchElement));