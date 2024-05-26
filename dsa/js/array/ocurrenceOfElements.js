function getOccurrenceOfElements(arr) {
    try {
        let countingObj = {};

        for (let i = 0; i < arr.length; i++) {
            if (!countingObj[arr[i]]) {
                countingObj[arr[i]] = 1
            } else {
                // countingObj[arr[i]] = countingObj[arr[i]] + 1
                countingObj[arr[i]] += 1
            }
        }
        return { success: true, countingObj }
    } catch (error) {
        return { success: false, error }
    }
}
const arrayOfElements = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log("Occurrence Of Elements ========>", getOccurrenceOfElements(arrayOfElements));