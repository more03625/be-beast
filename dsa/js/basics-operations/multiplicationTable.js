const multiplicationTable = (number) => {

    if (number === 0) {
        return { msg: 'cannot print table of 0' }
    }

    let arr = [], count = 0;

    for (let i = 1; i <= 10; i++) {
        count = count + (number * i)
        arr.push(number * i);
    }
    return { arr, count }

}
console.log(multiplicationTable(-4));