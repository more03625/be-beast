// 3) Find the "Kth" max and min element of an array 
// N = 6
// arr[] = 7 10 4 3 20 15
// K = 3

const getKthSmallestElement = (arr) => {
    // To get the Kth Smallest in an array, first sort the array, then get the Kth small!.
    arr.sort(
        function (a, b) {
            return a - b
        }
    )
    let k = 3;

    console.log("Kth Smallest Number is  ===> ", arr, arr[k - 1])
}

getKthSmallestElement([7, 10, 4, 3, 20, 15])

// Logic: Sort the Array then get the K - 1 as the Kth smallest
// TC: O(N Log N) 