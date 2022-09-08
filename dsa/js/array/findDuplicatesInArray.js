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
