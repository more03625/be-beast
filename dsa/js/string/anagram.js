const isAnagram = (string1, string2) => {

    if (string1.length !== string2.length) {
        return false;
    }

    for (let i = 0; i < string1.length; i++) {
        let found = false;
        for (j = 0; j < string2.length; j++) {
            if (string1[i] === string2[j]) {
                found = true;
                break;
            }
        }
        if (!found) {
            return false;
        }
    }

    return true;
}

const isAnagramUsingHashTable = (string1, string2) => {
    if (string1.length !== string2.length) {
        return false;
    }

    // If small letters use array of length 26.
    const newArray = new Array(26).fill(0)

    for (let i = 0; i < string1.length; i++) {
        const charIndex = string2.charCodeAt(i) - 97;
        newArray[charIndex]++
    }

    for (let i = 0; i < string2.length; i++) {
        const charIndex = string2.charCodeAt(i) - 97;
        newArray[charIndex]--

        if (newArray[charIndex] < 0) {
            return false
        }
    }

    return true;
}

const main = (string1, string2) => {
    // return isAnagram(string1, string2)
    return isAnagramUsingHashTable(string1, string2)
}

const string1 = "decimal";
const string2 = "medical";

console.log(main(string1, string2));