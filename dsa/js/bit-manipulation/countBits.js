const countBits = (n) => {
    const setBitCountArray = [0]
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 1) {
            const setBitCount = 1 + Math.floor((i / 2))
            setBitCountArray.push(setBitCount)
        } else {
            const setBitCount = Math.floor((i / 2))
            setBitCountArray.push(setBitCount)
        }
    }

    return setBitCountArray
}

console.log('countBits ===>', countBits(8));