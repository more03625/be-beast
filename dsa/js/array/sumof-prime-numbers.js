function isPrime(n) {
    // since 0 and 1 is not prime return false.
    if (n == 1 || n == 0) return false;

    // Run a loop from 2 to n-1
    for (var i = 2; i < n; i++) {

        // if the number is divisible by i, then n is not a prime number.
        if (n % i == 0) return false;
    }
    // otherwise, n is prime number.
    return true;
}

const sumOfPrimeNumber = (n) => {
    let count = 0
    for (var i = 1; i <= n; i++) {
        // check if current number is prime
        if (isPrime(i)) {
            count = count + i
        }
    }
    return count
}
console.log(sumOfPrimeNumber(10)); // Output 17