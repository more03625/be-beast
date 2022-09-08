const primeNumber = (n) => {

    if (n === 1 || n === 0) {
        return { msg: `${n} is neither prime nor composite number.` }
    }

    for (let i = 2; i < n; i++) { // Loop till that number if you can't find early. 
        console.log(i);
        if (n % i === 0) { // If that number `n` is divisible by any other number than, `1 & that number itself` then that is `NOT a Prime Number`.
            return { msg: `${n} is a Composite Number!` }
        }
    }
    return { msg: `${n} is a Prime Number!` } // If that number is only divisible by 1 & that number iteself then that Number `n` is a prime number!
}
console.log(primeNumber(9));

/*
    NOTE
    1) A prime number is a positive integer that is only divisible by 1 and itself
    2) For example, 2, 3, 5, 7, 11 are the first few prime numbers.
    3) 1 is neither prime nor composite number.
*/