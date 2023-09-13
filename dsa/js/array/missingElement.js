
const findMissingElement = (array) => {
    /* n(n+1)/2: Sum of first n natural numbers. n- max element from array */

    // Sum of n natural Numbers.
    let n = array[array.length - 1];
    let sum = n * (n + 1) / 2

    // Sum of numbers present in the array!
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total = total + array[i]
    }

    const missingNumber = sum - total;
    return missingNumber;
}

const findMissingElementNotNaturalNumbers = (array) => {
    const low = array[0]
    const high = array[array.length - 1]

    for (let i = 0; i < array.length; i++) {
        if (array[i] - i !== low) {
            const missingElement = i + low;
            return missingElement;
        }
    }

}

const findMultipleMissingElement = (array) => {
    let low = array[0];
    const missingElementArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] - i !== low) {
            while (low < array[i] - i) {
                missingElementArray.push(i + low);
                low++
            }
        }
    }
    return missingElementArray;
}

const missingElementsInUnSortedArray = (array) => {
    const newArray = new Array(Math.max(...array)).fill(0);

    for (let i = 0; i < array.length; i++) {
        newArray[array[i]]++
    }

    const missingElements = [];
    for (let i = 1; i < newArray.length; i++) {
        if (newArray[i] === 0) {
            missingElements.push(i);
        }
    }

    return missingElements;
}

const array = [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12];
const notANaturalNumbers = [6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17];
const multipleMissingElements = [6, 7, 8, 9, 11, 15, 16, 17, 18, 19];
const unSortedArray = [3, 7, 4, 9, 12, 6, 1, 11, 2, 10];


// console.log("======>", findMissingElement(array));
// console.log("Missing element from not natural numbers ======>", findMissingElementNotNaturalNumbers(notANaturalNumbers));
// console.log('multipleMissingElements ===> ', findMultipleMissingElement(multipleMissingElements));
console.log('multipleMissingElements unSortedArray ===> ', missingElementsInUnSortedArray(unSortedArray));
