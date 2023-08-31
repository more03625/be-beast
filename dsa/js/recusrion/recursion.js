const printNumber = (n) => {
    if (n === 0) {
        return
    }
    printNumber(n - 1)
    console.log(n)
}
printNumber(5);

const factorialUsingRecursion = (n) => {

    if (n === 1) {
        return 1
    }

    return n * factorialUsingRecursion(n - 1)
}
// console.log(factorialUsingRecursion(4)); // 24
