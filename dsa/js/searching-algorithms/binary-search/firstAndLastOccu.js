const firstAndLastOccurrence = (arr, target) => {

    function findBound(isFirst) {
        let left = 0;
        let right = arr.length - 1;

        let index;
        while (left <= right) {
            const mid = Math.floor(left + ((right - left) / 2));

            if (arr[mid] === target) {
                index = mid;

                if (isFirst) {
                    right = mid - 1
                } else {
                    left = mid + 1
                }
            } else if (target < arr[mid]) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        }

        return index
    }

    return [findBound(true), findBound(false)]
}


const arr = [1];
const target = 1
console.log('firstAndLastOccurrence ===>', firstAndLastOccurrence(arr, target));
