const findNumberInArray = (array, key) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === key) {
            return i
        }
    }
    return -1
}
let arr = [1, 2, 4, 2, 3, 2, 3, 3, 6, 7], key = 10;

console.log(findNumberInArray(arr, key));