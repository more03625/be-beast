const findPeak = (arr) => {
    const peaks = [];
    for (let i = 0; i < arr.length; i++) {

        let leftElement = i > 0 ? arr[i - 1] : -Infinity
        let rightElement = i < arr.length - 1 ? arr[i + 1] : -Infinity

        if (arr[i] >= leftElement && arr[i] >= rightElement) {
            peaks.push(i) // as peak
        }
    }

    return peaks.length > 0 ? peaks : 0
}

console.log("===>", findPeak([1, 2, 1, 3, 5, 6, 4]));
