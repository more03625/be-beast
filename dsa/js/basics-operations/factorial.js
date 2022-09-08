const factorial = (number) => { // recursion

    if (number === 1) {
        return 1
    }
    return number * factorial(number - 1)
}
// console.log(factorial(5));

const factorialIterative = (number) => { // Iterative Solution

    if (number < 0) {
        return { msg: 'Number shoud not be less than 0' }
    }

    let multiplication = 1;

    for (let i = number; i >= 1; i--) {
        multiplication = multiplication * i; //(1 * 5), (5 * 4) ...
    }

    return { msg: `The factorial of ${number} is ${multiplication}` }

}

// console.log(factorialIterative(5));

/*
    Note:
    1) factorial of 5 is equal to 1 * 2 * 3 * 4 * 5 = 120.
    2) The factorial of negative numbers do not exist.
    3) The factorial of 0 is 1.
*/
