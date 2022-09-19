// 11) find duplicate in an array of N+1 Integers
const findDuplicatesInArray = (arr) => {

    let arrNew = []; // 57 Test Cases passed. out of 58
    for (let i = 0; i < arr.length; i++) {
        if (arrNew.includes(arr[i])) {
            console.log("Brute Force ===> ", arr[i]) // Due to return statement, This can find only 1 repeting element.
        }
        arrNew.push(arr[i])
    }
}
findDuplicatesInArray([0, 4, 3, 2, 7, 8, 2, 3, 0])

const findDuplicatesInArrayON = (nums) => {
    let slow = nums[0], fast = nums[0];

    do {
        slow = nums[slow]; // This method works for only 1 elemtn in arr
        fast = nums[nums[fast]];
    } while (slow != fast)

    fast = nums[0];
    while (slow != fast) {
        slow = nums[slow]
        fast = nums[fast]
    }
    return (slow);
}
console.log("Cyclic Method ===> ", findDuplicatesInArrayON([0, 4, 3, 2, 7, 8, 2, 3, 0]))


/*
    3rd Method
*/

// 1) Sort the array 
// 2) if(arr[i] === arr[i + 1]) then push it duplicate array.


const swap = (arr, i, j) => {
    let temp;
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const sort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j + 1] > arr[j]) {
                swap(arr, j + 1, j);
            }
        }
    }
    return arr
}

// If it's given that array is already sorted use below method without sort function!
const findDuplicateElements = (arr) => {
    const sortedArray = sort(arr);
    let duplicateNumberArray = []
    for (let i = 0; i < sortedArray.length - 1; i++) {
        if (sortedArray[i + 1] === sortedArray[i]) {
            duplicateNumberArray.push(sortedArray[i])
        }
    }
    return duplicateNumberArray;

}
const arr = [5, 9, 8, 74, 256, 74, 9];
console.log('Duplicate Number is ', findDuplicateElements(arr));


/*
   End of 3rd Method
*/