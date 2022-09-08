// 1) Reverse a String
// 1) Read from the end of the str
const reverString = str => { // Brute Force. // O(n) 
    let i, stringLength = str.length - 1, arr = []

    for (i = stringLength; i >= 0; i--) {
        str.push(str[i])
    }
    return str

}
// console.log("reverString ===> ", reverString(["H", "a", "n", "n", "a", "h"]))


// 1) Convert Str to Array. & Swap the positions

const reverseStringSwapMethod = str => { // O(n)

    let start = 0, end = str.length - 1, temp

    while (start < end) {
        temp = str[start];
        str[start] = str[end];
        str[end] = temp
        start++
        end--
    }
    return str;

}
console.log("reverseStringSwapMethod ===> ", reverseStringSwapMethod(["h", "e", "l", "l", "o"]));