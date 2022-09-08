const findMin = (...arr) => {
    let i = 0, min = arr[0], max = arr[0]

    while (i < arr.length) {
        if (arr[i] < min) {
            min = arr[i]
        }

        if (arr[i] > max) {
            max = arr[i]
        }

        i++
    }
    return { min, max }
}

console.log(findMin(3, 5, 9, 1));

/*
    NOTE:
    1) user can pass any number of arguments to the function.
    2) You can read more about Spread Vs Rest parameters in js
    3) When `...` is at the end of function parameters, it’s “rest parameters” and gathers the rest of the list of arguments into an array.
    4) When `...` occurs in a function call or alike, it’s called a “spread syntax” and expands an array into a list.
*/