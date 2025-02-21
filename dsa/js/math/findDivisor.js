const findAllDivisor = (number) => {

    const divisors = [];
    for (let i = 1; i <= number; i++) {
        if ((number % i) === 0) {
            divisors.push(i)
        }
    }

    return divisors;
}

console.log('findAllDivisor ==>', findAllDivisor(9))