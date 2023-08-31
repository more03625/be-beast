const doSomeCalculation = (n) => {
    if (n > 100) {
        return n - 10;
    } else {
        return doSomeCalculation(doSomeCalculation(n + 11))
    }
}

const main = (n) => {
    return doSomeCalculation(n)
}

console.log(main(30));