function getReversedArray(arr) {
    try {
        let i = 0;
        let j = arr.length - 1;
        let temp;

        while (i < j) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--
        }

        return { success: false, arr }
    } catch (error) {
        return { success: false, error }
    }
}

const arrayOfElements = [4, 3, 5, 7, 8, 9]
console.log("Reversed Array ===========>", getReversedArray(arrayOfElements));