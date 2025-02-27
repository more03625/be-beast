const swapNumbers = (a, b) => {
    a = a ^ b
    b = a ^ b
    a = a ^ b

    return { a, b }
}

console.log('Swap Number ===>', swapNumbers(5, 6));
