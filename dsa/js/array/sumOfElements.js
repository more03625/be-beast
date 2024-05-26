function getSumOfElement(arr) {
    try {
        let sum = 0

        for (element of arr) {
            sum += element
        }

        return { success: true, sum }
    } catch (error) {
        return { success: false, error: error }
    }
}

const arrayOfElements = [1, 2, 3, 4, 5];
const sumOfElements = getSumOfElement(arrayOfElements);
console.log('sumOfElements ========>', sumOfElements);