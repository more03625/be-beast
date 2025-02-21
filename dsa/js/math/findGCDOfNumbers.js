const findAllDivisor = (number) => {
    const divisors = [];
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            divisors.push(i)
        }
    }

    return divisors;
}

const findGCDOfNumbers = (a, b) => {
    const divisorsOfA = findAllDivisor(a);
    const divisorsOfB = findAllDivisor(b);

    const commonDivisors = divisorsOfA.filter(num => divisorsOfB.includes(num));
    return commonDivisors.length > 0 ? Math.max(...commonDivisors) : 1;
}

const findGCDWithEuclideanAlgo = (a, b) => {
    while (b != 0) {
        let temp = b;
        b = a % b
        a = temp
    }

    return a;
}

console.log('findGCDOfNumbers =>', findGCDWithEuclideanAlgo(15, 10))