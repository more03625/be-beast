const fibonacci = (number) => {
    let first = 0, second = 1, next, arr = [], count = 0

    // 0,1,1,2,3,5,8,13,21,34
    for (let i = 0; i <= number; i++) {
        arr.push(first)
        count = count + first
        next = first + second; //1
        first = second; // 1
        second = next // 1
    }
    return arr[arr.length - 1]//{arr[arr], count}
}

console.log(fibonacci(4));