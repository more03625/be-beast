const getMultiplyedByXtimes = (x, y) => { // Multiply x by y times
    let count = 1;

    for (let i = 0; i < y; i++) {
        count = count * x
    }
    return count
}

console.log(getMultiplyedByXtimes(4, 3)); // Multiply 4 by 3 times.