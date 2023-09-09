const insertElementInTheSortedArray = (array, elementToInsert) => {
    let i = array.length - 1;

    while (array[i] > elementToInsert) {
        array[i + 1] = array[i]
        i--
    }

    array[i + 1] = elementToInsert;
    return array
}

const array = [2, 3, 4, 5, 7, 8, 9];
const elementToInsert = 6
console.log('insertElementInTheSortedArray ===> ', insertElementInTheSortedArray(array, elementToInsert));