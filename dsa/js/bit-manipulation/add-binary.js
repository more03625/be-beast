const addBinary = (a, b) => {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;

    const result = [];

    while (i >= 0 || j >= 0 || carry) {

        let sum = carry;

        if (i >= 0) {
            sum += a[i--] - '0'; // Convert character to integer safely
        }

        if (j >= 0) {
            sum += b[j--] - '0'; // Convert character to integer safely
        }

        // '1' - '0'   49 - 48 = 1
        // '0' - '0'   48 - 48 = 0

        result.push(sum % 2);
        carry = Math.floor(sum / 2)
    }

    return result.reverse().join('')
}

console.log('addBinary ===>', addBinary('11', '1'));
