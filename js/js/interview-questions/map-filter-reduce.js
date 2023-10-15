const nums = [1, 2, 3, 4];

// /* Working of Reduce */
// const sum = nums.reduce((previousValue, currentValue, index, array) => {
//     console.log(previousValue, currentValue);
//     return previousValue + currentValue
// });

/*
    * Polyfill for map();
*/

// nums.map(() => {
// })

// Array.prototype.myCustomMap = function (cb) {
//     console.log('cb', cb);
//     let tempArray = [];

//     for (let i = 0; i < this.length; i++) {
//         tempArray.push(cb(this[i], i, this));
//     }

//     console.log('tempArray', tempArray);
//     return tempArray;
// }

// nums.myCustomMap((num) => {
//     console.log(num);
// });

/*
    * Polyfill for filter();
*/

// nums.filter()

// Array.prototype.myCustomFilter = function (cb) {
//     let tempArray = [];

//     for (let i = 0; i < this.length; i++) {
//         if (cb(this[i], i, this)) {
//             tempArray.push(this[i])
//         }
//     }

//     return tempArray;
// }

// const moreThanTwo = nums.myCustomFilter((currentValue, index, array) => {
//     return currentValue > 2
// });

// console.log('moreThanTwo', moreThanTwo);

/*
    * Polyfill for reduce();
*/

// nums.reduce();

// Array.prototype.myCustomReduce = function (cb, initialValue) {
//     let previousValue = initialValue

//     for (let i = 0; i < this.length; i++) {
//         previousValue = previousValue ? cb(previousValue, this[i], i, this) : this[i]
//     }

//     return previousValue
// }

// const response = nums.myCustomReduce((previousValue, currentValue, index, array) => {
//     console.log(previousValue, currentValue);
//     return previousValue + currentValue;
// }, 0);

// console.log('response', response);

let arr = [1, 2, 5]