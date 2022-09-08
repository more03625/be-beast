const is31Days = (monthNumber) => {

    let monthArr = ['january', 'feb', 'march', 'april', 'may', 'june', 'july', 'august', 'sepatember', 'octomber', 'november', 'december']

    if ((monthNumber % 2) === 0) {
        return { msg: `Month ${monthArr[monthNumber - 1]} is not of 31 days` }
    } else {
        return { msg: `Month ${monthArr[monthNumber - 1]} is of 31 days` }
    }
}

console.log(is31Days(8));


/*
    NOTE
    1) This logic assumes that `alternative months` contains 31 days.
    2) BUT, this is wrong logic cause (JULY, AUG), so what is right logic? in order to get this right, we have to tell the system which months (Number OR n) containes 31 days.
    3) Then we can easily print the appropriate results.
*/