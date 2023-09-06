// Recrsive Version
const sumNumbers = (n) => {
    if (n === 0) {
        return 0;
    } else {
        return sumNumbers(n - 1) + n
    }
}

const main = (n) => {
    return sumNumbers(n)
}


console.log("Recusrive Version", main(5));

// Itrative Version
const iSum = (n) => {
    let sum = 0;
    for (var i = 1; i <= n; i++) {
        sum = sum + i
    }
    return sum;
}
console.log("itrative Version ==>", iSum(5))