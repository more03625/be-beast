const countSetBits = (n) => {
    let count = 0;
    while(n > 1){
        if(n % 2 === 1){
            count = count + 1
        }

        n = Math.floor(n/2)

        if(n === 1){
            count = count + 1
        }
    }

    return count;
}

const countSetBits2 = (n) => {
    let count = 0;
    while(n > 0){
        count = count + (n & 1)

        n = n >> 1

        if(n === 1){
            count += 1
        }
    }

    return count
}

console.log('countSetBits ===>', countSetBits2(1));
