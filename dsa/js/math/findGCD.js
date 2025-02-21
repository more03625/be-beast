const getGCD = (a, b) => {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }

    return a
}

const findGCD = (arr) => {
    arr.sort((a, b) => (a - b)) // O(n log n)
    const a = arr[0];
    const b = arr[arr.length - 1];

    return getGCD(a, b) // O(min(m, n))
}

// console.log('findGCD ===> ', findGCD([7, 5, 6, 8, 3]))

// TC: O(n log n): Cause Dominates over O(min(m, n))
// SC: O(1)
//  1. Sorting done in-place O(1)
//  2. No Extra Space in GCD Calculation. O(1)


// Approach 2

const getGCDWithOutSorting = (arr) => {

    const a  = Math.max(...arr); // O(n)
    const b = Math.min(...arr); // O(n)

    return getGCD(a, b) // O(MIN(M,N))
}

console.log('getGCDWithOutSorting ==>', getGCDWithOutSorting([7, 5, 6, 8, 3]));

// TC: O(n)
// SC: O(1)
