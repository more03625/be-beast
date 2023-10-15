// (function square(num) {
//     return function (num1) {
//         console.log(num * num1);
//     }
// })(5)(3);

console.log("Outside Square ===> ", this);

function square(a, b, c) {
    console.log("Inside Square ===> ", this);
}

square(1, 2, 3);