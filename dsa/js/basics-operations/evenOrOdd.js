const evenOrOdd = (n) => {

    if (n % 2 === 0) {
        return { msg: 'Number is even' }
    } else {
        return { msg: 'Number is odd' }
    }

}
console.log(evenOrOdd(8));