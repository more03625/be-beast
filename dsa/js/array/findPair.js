// Find a pair whose total is 10;

// O(n^2)
const findPair = (array, k) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if ((array[i] + array[j]) === k) {
                console.log(`Pairs are ${array[i]} ${array[j]}`);
            }
        }
    }
}

const findPairs = (array, k) => {
    const newArray = new Array(Math.max(...array) + 1).fill(0);
    for (let i = 0; i < array.length; i++) {
        newArray[array[i]]++;
    }

    for (let i = 0; i < array.length; i++) {
        const complement = k - array[i];
        if (complement >= 0 && newArray[complement] > 0) {
            console.log("Pairs from array ==>", array[i], complement);
        }
    }
}

const array = [6, 3, 8, 10, 16, 7, 5, 2, 9, 14];
const k = 10;

// findPair(array, k)
findPairs(array, k)
