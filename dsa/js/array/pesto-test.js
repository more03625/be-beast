// const swap = (start, end, arr) => {
//     let temp;
//     while (start < end) {
//         temp = arr[start];
//         // alert("Rahul More ===> ", temp);
//         arr[start] = arr[end];
//         arr[end] = temp
//         start++
//         end--
//     }
//     return arr;
// }
// function reverseArray(arr) {
//     // console.log(arr)
//     let start = 0, end = arr.length - 1, reversedArrayWithDigit = []
//     let reversedArray = swap(start, end, arr);

//     // swap(start, end, String(reversedArray[i]).split(""))
//     for (let i = 0; i < reversedArray.length; i++) {
//         let arraySpliting = String(reversedArray[i]).split("");
//         let start = 0, end = arraySpliting.length - 1
//         let finalSwap = swap(start, end, arraySpliting)
//         reversedArrayWithDigit.push(Number(finalSwap.join("")))
//     }
//     return reversedArrayWithDigit
//     // console.log(reverseDigit);

// }
// // reverseArray([1326, 4216, 6521, 74631])
// console.log(reverseArray([1326, 4216]));
// // reverseArray( ['7', '4', '6', '3', '1'])


// *****************************
const swap = (start, end, arr) => {
    arr = arr.split("");

    let temp;
    let specialCharacter = "+-.%,&*$^!@&\_#()'/:-|<>={}[]?";

    while (start < end) {

        while (specialCharacter.includes(arr[start])) {
            start++
        }
        while (specialCharacter.includes(arr[end])) {
            end--
        }

        temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp
        start++
        end--
    }
    return arr;
}
function reverseString(str) {
    str = str.trim();
    let start = 0, end = str.length - 1
    return swap(start, end, str).join("")
}
console.log(reverseString('F@$t&Fl_lRIoL_$'));