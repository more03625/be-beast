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
        console.log('First Time', array);

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

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log('reverseArray With Extra Space', reverseArrayWithExtraSpace(array));
// console.log('reverseArray WithOut Extra Space', reverseArrayWithoutExtraSpce(array));