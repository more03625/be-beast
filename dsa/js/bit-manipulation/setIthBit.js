const setIthBit = (N, i) => {
    return N | (1 << i)
}

console.log('setIthBit ===>', setIthBit(9, 2));