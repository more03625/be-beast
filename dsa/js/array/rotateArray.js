function getRightRotatedArray(arr) {
    try {
        let firstElement = arr[0];

        for (let i = 0; i < arr.length - 1; i++) {
            arr[i] = arr[i + 1]
        }
        arr[arr.length - 1] = firstElement;

        return { success: true, arr }
    } catch (error) {
        return { success: false, error }
    }
}


function getLeftRotatedArray(arr) {
    try {
        
        return { success: true, arr }
    } catch (error) {
        return { success: false, error }
    }
}
const arrayOfElements = [4, 3, 5, 7, 8, 9]
console.log("Reversed Array ===========>", getRightRotatedArray(arrayOfElements));