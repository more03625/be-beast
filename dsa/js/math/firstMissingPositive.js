const sortArray = (arr) => {
    let i = 0, j = arr.length - 1;

    while (i < j) {
        let temp = arr[i];
        arr[i] = arr[j]
        arr[j] = temp;

        i++;
        j--
    }

    return arr
}

const firstMissingPositive = (arr) => {
    const sortedArray = sortArray(arr)

    return sortedArray;
}

console.log('firstMissingPositive -=>', firstMissingPositive([1, 2, 0]));
