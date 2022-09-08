const printNumber = (n) => {
    if (n == 0) {
        return
    }
    printNumber(n - 1)

    console.log(n)

}
// printNumber(5);

const factorialUsingRecursion = (n) => {

    if (n == 1) {
        return 1
    }

    return n * factorialUsingRecursion(n - 1)
}
//console.log(factorialUsingRecursion(4)); // 24

const spellTheNumber = (number) => {

    let arr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

    if (number == 0) {
        return
    }


    // spellTheNumber(number % 10)

}
// console.log(spellTheNumber(43));