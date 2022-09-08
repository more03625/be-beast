const isLeapYear = (year) => {

    // Three condition's has to be matched!

    if ((year % 4 === 0) && (year % 400 === 0) || (year % 100 !== 0)) {
        return { msg: `${year} is the leap year` }
    } else {
        return { msg: `${year} is NOT the leap year` }
    }
}
// console.log(isLeapYear(2016));
// console.log(isLeapYear(2000));
// console.log(isLeapYear(1700));
// console.log(isLeapYear(1800));
// console.log(isLeapYear(100));

/*
    NOTE
    1) one year in every four, in which February has 29 days instead of 28
    2) Leap year comes onece in every four year.
    3) In leap year FEB has 29 days
    4) The year is a multiple of 400.
    5) The year is a multiple of 4 and not a multiple of 100.
*/

const leapYearTeaster = (yearArray) => { // A basic logic for testCase.

    for (let i = 0; i < yearArray.length; i++) {
        console.log(isLeapYear(yearArray[i]));
    }
}

leapYearTeaster([2016, 2000, 1700, 1800, 100]);