// 1. Reverse Array.
// 2. Left Shift Array.
// 3. Right Shift
// 4. Left Roatate
// 5. Right Roatate

const reverseArrayWithExtraSpace = (array) => {
    if (array.length > 0) {
        const tempArray = [];

        for (let i = array.length - 1; i >= 0; i--) {
            tempArray.push(array[i])
        }

        return tempArray;
    } else {
        return 'Array Should have at least 1 element!';
    }
}

const swapElements = (i, j, array) => {
    let temp = array[j];
    array[j] = array[i]
    array[i] = temp;

    return array; // Returns the updated array!
}

const reverseArrayWithoutExtraSpce = (array) => {
    if (array.length > 0) {
        let i = 0; let j = array.length - 1;

        while (i < j) {
            swapElements(i, j, array); // Sends the new array each time as swapElements returning the updated array.
            i++
            j--
        }

        return array;

    } else {
        return 'Array Should have at least 1 element!';
    }

}

const leftShift = (array) => {
    if (array.length > 0) {
        for (let i = 0; i < array.length; i++) {
            array[i] = array[i + 1] || 0
        }
        return array;
    } else {
        return 'Invalid array length!';
    }
}

const rightShift = (array) => {
    if (array.length > 0) {
        for (i = array.length - 1; i >= 0; i--) {
            array[i] = array[i - 1] || 0
        }
        return array;
    } else {
        return 'Invalid array length!';
    }
}

const leftRotate = (array) => {
    if (array.length <= 1) { // No rotation is needed if there is only 1 or 0 elements in array!
        return array;
    }

    // Takout first Element
    const firstElement = array[0];
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i + 1]
    }

    array[array.length - 1] = firstElement;
    return array;
}

const rightRotate = (array) => {
    // Takeout last Element
    if (array.length <= 1) {
        return array;
    }

    const lastElement = array[array.length - 1];

    for (let i = array.length - 1; i >= 0; i--) {
        array[i] = array[i - 1]
    }
    array[0] = lastElement;
    return array;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('reverseArray With Extra Space', reverseArrayWithExtraSpace(array));
console.log('reverseArray WithOut Extra Space', reverseArrayWithoutExtraSpce(array));
console.log('leftShift', leftShift(array));
console.log('rightShift', rightShift(array));
console.log('leftRotate', leftRotate(array));
console.log('rightRotate', rightRotate(array));