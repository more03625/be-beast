const getGCD = (a, b) => {
    while (b !== 0) {
        let temp = b;
        b = a % b
        a = temp
    }

    return a
}

const gcdOfString = (str1, str2) => {
    if(str1 + str2 === str2 + str1){
        const gcd = getGCD(str1.length, str2.length);
        return str1.slice(0, gcd)
    }

    return ""
}

console.log('gcdOfString ==>', gcdOfString("ABCABC", "ABC"));
