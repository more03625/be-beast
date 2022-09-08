const strToUpperCase = (str) => {
    return str.toUpperCase()
}
// console.log(strToUpperCase('rahulmore'));

const appendStrings = (str1, str2) => {
    return str2 + str1
}
// console.log(appendStrings('Good', 'Morning'));

const countNumberOfCharacter = (str) => {
    let i, count = 0;
    for (i = 0; i < str.length; i++) {
        if (str.charAt(i) != ' ') {
            count = count + 1;
        }
    }
    return count
}
// console.log(countNumberOfCharacter(''));

const deleteVowels = (str) => {
    if (str.length > 80) return { err: 'String length is greater than 80' }
    let vowels = 'aeiou', i, noVowels = '', onlyVowels = '';

    for (i = 0; i < str.length - 1; i++) {
        if (vowels.includes(str[i])) {
            onlyVowels = onlyVowels + str[i]
        } else {
            noVowels = noVowels + str[i];
        }
    }
    return { noVowels, onlyVowels };

}
// console.log(deleteVowels('Write a program to delete all vowels from a string. Assume string is not more th'));

const convertFirstNToCaps = (str, n) => {

    let i, newStr = '';

    for (i = 0; i < str.length; i++) {
        if (i < n) {
            newStr = newStr + str[i].toUpperCase()
        }
    }
    return newStr + str.slice(n, str.length);

}
// console.log("Cap str is ===> ", convertFirstNToCaps('tic tac toe is a fun game', 6))

const maskLastNCharacters = (str, maskLastN) => {
    str = str.toString();
    let hashMarkes = ''

    if (str.length === 0) return { err: 'String cannot be empty!' }

    if (str.length < maskLastN) return { err: 'String cannot be less than masked length' }

    for (let i = 0; i < maskLastN; i++) {
        hashMarkes = hashMarkes + '#'
    }

    return str.slice(0, str.length - maskLastN) + hashMarkes

}
// console.log("Str after masked ===> ", maskLastNCharacters('rahul more', 5));

const getCubeOfNumber = (number) => {
    number = Number(number);

    for (i = 0; i < number; i++) {
    }
    return number
}

const armStrongNumber = (number) => {
    let i, str = number.toString(), n = number.toString().length, sum = 0;

    for (i = 0; i < n; i++) {
        sum = sum + getCubeOfNumber(str[i])
    }
    if (sum === number) {
        return { msg: `Yes, ${number} is the 3 digit arm strong number` }
    } else {
        return { msg: `No, ${number} is not a 3 digit arm strong number` }
    }
}
// console.log(armStrongNumber(1634));

const primeNumberSum = (number) => {
    let isPrime = true;
    for (let i = 2; i < number; i++) {
        if (number % i != 0) {

            console.log(i);
            // isPrime = false;
            // break;
        }
    }
    return isPrime;
}
// console.log("isPrime ===> ", primeNumberSum(5));

const upperCaseEachWord = (str) => {

    if (str.length === 0) return -1;

    let words = str.split(" "), i;
    for (i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);  //substr():- It extract the `specified` part of the string & returns rest of the str.
    }
    return words.join(" ")
}
// console.log(upperCaseEachWord('a'));
const printAllSubstring = (str, output) => {
    // substr = 2 to the power str.length = 2 ^ 3 = 8 Substrings;
    let smaller
    if (str.length === 0) {
        output[0] = "";
        return 1;
    }

    // abc:- first find for bc only. then get output of bc & add `a` to every substr of `bc`.
    smallerOutputSize = printAllSubstring(str.substr(1), output);

    for (let i = 0; i < smallerOutputSize; i++) {
        output[i + smallerOutputSize] = str[0] + output[i]
    }

    return 2 * smallerOutputSize
}
let output = [];
// console.log("Substrings of the given strings are ===> ", printAllSubstring('abcd', output));

// A program that reads three strings and prints the longest and smallest one
const longestAndSmallestString = (...strings) => {
    let longestSoFar = '', smallestSoFar = '';

    for (let i = 0; i < strings.length; i++) {

        if (strings[i].length > longestSoFar.length) {
            longestSoFar = strings[i]
        }

        if (smallestSoFar === '') {
            smallestSoFar = strings[i]
        }

        if (strings[i].length < smallestSoFar.length) {
            smallestSoFar = strings[i]
        }
    }
    return { longestSoFar, smallestSoFar }
}
// console.log("longest And Smallest String ===> ", longestAndSmallestString('r', 'yogeshmorehere', 'rohit'));
const longestAndSmallestWord = (string) => {

    let longestSoFar = '', smallestSoFar = ''

    string = string.split(" ")
    for (let i = 0; i < string.length; i++) {

        if (string[i].length > longestSoFar.length) {
            longestSoFar = string[i]
        }

        if (smallestSoFar === '') {
            smallestSoFar = string[i]
        }

        if (string[i].length < smallestSoFar.length) {
            smallestSoFar = string[i]
        }
    }
    return { longestSoFar, smallestSoFar }
}
// console.log(longestAndSmallestWord('GeeksforGeeks A computer Science portal for Geeks'));

const removeTime = (str) => {
    arr = str.split(" ");

    return (arr.slice(0, -1).join(" "));
}
// console.log(removeTime('Wed April 15 7pm'));
