const swapElements = (i, j, array) => {
    let temp = array[j];
    array[j] = array[i]
    array[i] = temp;

    return array; // Returns the updated array!
}

const sortNegativeAndPositiveElements = (array) => {
    let i = 0, j = array.length - 1;

    while (i < j) {

        while (array[i] < 0) {
            i++
        }

        while (array[j] >= 0) {
            j--
        }

        if (i < j) {
            swapElements(i, j, array);
        }
    }
    return array;
}


const array = [-6, 3, -8, 10, 5, -7, -9, 12, -4, 2]
console.log('sortNegativeAndPositiveElements', sortNegativeAndPositiveElements(array));

// Similar to move negative