const isArraySorted = (array) => {

    let isSorted = true, isReverseSorted = true;

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] > array[i + 1]) {
            isSorted = false
            break;
        }
    }
    for (let i = array.length - 1; i > 0; i--) {
        if (array[i] < array[i - 1]) {
            isReverseSorted = false;
            break;
        }
    }

    return { isSorted, isReverseSorted }
}
// Test cases
const ascendingArray = [2, 3, 4, 5, 6, 7, 8, 9]; // Sorted
const descendingArray = [9, 8, 7, 6, 5, 4, 3, 2]; // Reverse Sorted
const unsortedArray = [3, 2, 4, 6, 5, 7, 8, 9]; // Unsorted

console.log('Ascending:', isArraySorted(ascendingArray)); // { isSorted: true, isReverseSorted: false }
console.log('Descending:', isArraySorted(descendingArray)); // { isSorted: false, isReverseSorted: true }
console.log('Unsorted:', isArraySorted(unsortedArray)); // { isSorted: false, isReverseSorted: false }
