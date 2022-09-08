const greateNumberFromThreeNumber = (n1, n2, n3) => {

    let greaterValue;
    if (n1 > n2) {
        greaterValue = n1
    } else {
        greaterValue = n2
    }
    return { greaterValue }

}
console.log(greateNumberFromThreeNumber(90000, 2, 20));


/*
    NOTE:

    logic:
    1) Find greatest from 1st 2 & then comapre laste element with current Greatest.
    2) You can implement similar logic for Minimum

*/