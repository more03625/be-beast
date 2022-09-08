// 6) Move all the negative elements to one side of the array 
// 1) Brute Force Approch

const moveNegativeNumber = (arr) => { // Brute Force (Using 3 arrays)
    let negativeNumberArray = [], positiveNumberArray = [], zeroNumberArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            // It is a negative number
            negativeNumberArray.push(arr[i])
        } else if (arr[i] > 0) {
            // It is a +ve number
            positiveNumberArray.push(arr[i])

        } else {
            // its a zero
            zeroNumberArray.push(arr[i])
        }
    }
    const mergedArray = [...negativeNumberArray, ...zeroNumberArray, ...positiveNumberArray]

    return mergedArray

}
// console.log(moveNegativeNumber([-12, 11, -13, -5, 6, -7, 5, -3, -6, 0]))

const swap = (start, end, arr) => {
    let temp;
    temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    return arr
}

// 2) Using 2 Pointer technique
const moveNegativeNumberUsingTwoPointer = (arr) => {

    // [-12, 11, -13, -5, 6, -7, 5, -3, -6, 0]
    //       Start                          End   

    let start = 0, end = arr.length - 1;

    while (start < end) {
        while (arr[start] < 0) {
            start++
        }
        while (arr[end] > 0) {
            end--
        }
        console.log(start, end, arr);
        swap(start, end, arr)
    }

    return arr


}
console.log("Using Two pointers ===> ", moveNegativeNumberUsingTwoPointer([-12, 11, -13, -5, 6, -7, 5, -3, -6, 0]))
// TC: O(n);
// SC : O(1) 