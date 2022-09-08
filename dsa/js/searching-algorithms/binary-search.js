const binarySearch = (arr, searchElement) => {
    let low = 0, high = arr.length - 1, mid

    if (searchElement < arr[0] || searchElement > arr[high]) return -1

    while (low <= high) {
        mid = low + Math.floor((high - low) / 2) // Continuesly change Mid
 
        if (searchElement === arr[mid]) {
            return mid
        } else if (searchElement > arr[mid]) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
    return -1
}
let arr = [2, 3, 4, 10, 40], searchElement = 40
console.log("Your search is present at index ===> ", binarySearch(arr, searchElement));