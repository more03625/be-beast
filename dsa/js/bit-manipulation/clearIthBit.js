const clearIthBit = (N, i) => {
    return N & ~(1 << i)
}

console.log('clearIthBit ===>', clearIthBit(13, 2));
