const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
}

const searchTarget = (arr, target) => {
    // Step 1: Find Pivot

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const mid = Math.floor(left + (right - left) / 2);

        if (arr[mid] < arr[right]) {
            right = mid
        } else {
            left = mid + 1
        }
    }

    const pivot = left;

    if (target === arr[pivot]) {
        return pivot
    }
    else if (target > arr[pivot]) { // 6 > 0
        binarySearch(arr, target)
    } else {

    }

    return pivot
}


// Striver Approach

const searchTarget2 = (arr, target) => {

    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[left] <= arr[mid]) {
            // Left Sorted, So Check In Left Part.
            if (arr[left] <= target && target <= arr[mid]) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        } else {
            // Right Sorted, So Check In Right Part.
            if (arr[mid] <= target && target <= arr[arr.length - 1]) {
                left = mid + 1
            } else {
                right = mid - 1
            }

        }
    }

    return - 1
}

// const arr = [7, 8, 9, 1, 2, 3, 4, 5, 6];
const arr = [4, 5, 6, 7, 0, 1, 2]
const target = 0
console.log('searchTarget2 =>', searchTarget2(arr, target));