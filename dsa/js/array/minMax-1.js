function getMinMax(array) {
    try {
        if (array.length === 0) {
            return { success: false, message: 'Array length should be greater than 1 to get the min & max' }
        }

        let min = array[0];
        let max = array[0];

        for (let i = 1; i < array.length; i++) {
            if (array[i] < min) {
                min = array[i]
            }

            if (array[i] > max) {
                max = array[i]
            }
        }

        return { success: true, min, max }
    } catch (error) {
        return { success: false, error: error }
    }
}

const arrayOfElements = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const minMax = getMinMax(arrayOfElements);
console.log('minMax ========>', minMax);