// Recursive Function
const calculateFactorial = (n) => {
    if (n === 0) {
        return 1
    } else {
        return calculateFactorial(n - 1) * n
    }
}

const main = (n) => {
    return calculateFactorial(n)
}

console.log(main(5));

// Itrative Formula.
const iRecursion = (n) => {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial = i * factorial
    }
    return factorial;
}

console.log(iRecursion(5));