const insertAt = (array, arrayLength, insertAtPosition, valueToInsert) => {

    if (insertAtPosition > arrayLength) {
        return 'Array is too small, mentioned index not present in the array.'
    }

    // INPUT ==> [2, 3, 4, 5, 6]
    // EXPECTED ==> [2, 3, 4, 90, 5, 6]

    // Shift elements to make space for the new value
    for (let i = arrayLength - 1; i >= insertAtPosition; i--) {
        array[i + 1] = array[i];
    }

    // Insert the value at the specified position
    array[insertAtPosition] = valueToInsert;

    return array;

    Array.apply

}

const main = (array, length, insertAtPosition, valueToInsert) => {
    return insertAt(array, length, insertAtPosition, valueToInsert)
}

const arr = [2, 3, 4, 5, 6];
const insertAtPosition = 3
const valueToInsert = 90;
const response = main(arr, arr.length, insertAtPosition, valueToInsert);

console.log('response ===>', response)

// Expected O/P: [2, 3, 4, 90, 5, 6]