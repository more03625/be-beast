const doSomeCalculation = (n) => {
    if (n > 0) {
        console.log(n)
        doSomeCalculation(n - 1)
        doSomeCalculation(n - 1)
    }
}

const main = (x) => {
    doSomeCalculation(x)
}

console.clear();
main(3);
