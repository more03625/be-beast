const deleteFromArrayAndShift = (array, indexToDelete) => {
    for (let i = indexToDelete; i < array.length - 1; i++) {
        array[i] = array[i + 1]
    }
    array.pop(); // Remove the end element
    return array;
}

const array = [2, 3, 4, 5, 6];
const indexToDelete = 2;
// Output: [2, 3, 5, 6]
console.log("deleteFromArrayAndShift ===> ", deleteFromArrayAndShift(array, indexToDelete));