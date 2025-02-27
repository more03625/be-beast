const isBitSet = (N, i) => {
    // Left Shift

    const leftShift = (N & (1 << i)) !== 0;
    const rightShift = ((N >> i) & 1) !== 0;

    return { leftShift, rightShift }
}

console.log('isBitSet ==>', isBitSet(13, 1));