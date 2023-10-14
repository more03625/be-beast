/* Notes: https://chat.openai.com/c/c7522401-d2d0-4a6b-8045-ae4c9359f35c */

// /* Callback Queue */
// console.log('a');

// setTimeout(() => {
//     console.log('b');
// }, 0);

// console.log('c');

// /* Integrate Debounce */

// const debounce = (fn, delay) => {
//     let timerId;
//     return function () {
//         clearTimeout(timerId)
//         timerId = setTimeout(() => {
//             fn.apply(this, arguments)
//         }, delay);
//     }
// }

// const callback = () => {
//     console.log('RAHUL MORE');
// }

// const debounceIt = debounce(callback, 300);
// debounceIt();

// /* Integrate Promise */

// const createPromiseWithPromiseConstructor = () => {
//     return new Promise((resolve, reject) => {
//         const isError = true;
//         if (isError) {
//             reject('Oh man, there is an error!')
//         } else {
//             resolve('Hi, my name is Rahul More')
//         }
//     });
// }

// const createPromiseWithAsyncKeyword = async () => {
//     const isError = true;

//     if (isError) {
//         throw new Error('Oh man, there is an error!')
//     } else {
//         return 'Hi, my name is Rahul More';
//     }
// }

// /* Instead of `then/catch` you can use `await` to resolve the promise. */  

// createPromiseWithPromiseConstructor().then((res) => { 
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

// createPromiseWithAsyncKeyword().then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

// /* Arrow functions VS Regular Function. */ 

// function regularFunction(){
//     return () => {
//         // Arrow functions, below this reffers to context of regularFunction.
//         console.log(this);
//     }
// }

// const arrowFunction = regularFunction();
// arrowFunction(); // 'this' refers to the context of 'regularFunction'

// function regularFunctionTwo(){
//     return function () {
//         console.log(this);
//     }
// }
// const innerFunction = regularFunctionTwo();
// innerFunction();

// /* Store by Reference VS Store by value. */

// /* Example 1 */
// let a = {}
// let b = {}

// a === b ? console.log(true) : console.log(false); // Objects & Arrays are stored/compared by reference.

// /* Example 2 */

// let nameOne = 'RAHUL';
// let nameTwo = 'RAHUL'

// nameOne === nameTwo ? console.log(true) : console.log(false); // Premitive data type like, number, string are stored/compared by value..

// /* Example 3 */

// let objectOne = {
//     name: "Rahul",
//     age: 25
// }

// let objectTwo = objectOne;
// objectTwo.name = 'Yogesh';

// console.log(objectOne);
// console.log(objectTwo);

// /* Example 4 */

// let firstName = 'RAHUL';
// let anotherFirstName = firstName;

// anotherFirstName = 'Yogesh';

// console.log(firstName);
// console.log(anotherFirstName);

// /* Set Cookies in Js */ 
// /* You might need localhost URL to see the cookies in cookies section */ 

// document.cookie = "username=rahul more here bro; path=/";
// const allCookies = document.cookie;
// console.log(allCookies);

// /* Call, Apply & Bind in Javascript */

// function greet(hometown, city) {
//     console.log("=============>", this);
//     console.log(`Hi ${this.name}, I think you are from ${hometown}, ${city}`);
// }

// let obj = { name: "rahul" };

// greet.call(obj, 'Maharashtra', 'CALL Mumbai'); // Manipulated the value if `this` to `obj`.
// greet.apply(obj, ['Maharashtra', 'APPLY Mumbai']) // Same as Call, but accepts array
// greet.bind(obj, 'Maharashtra', 'BIND Mumbai')() // Same as call, but does not invoke immediately. bind returns function.

// /* Function Currying */ 
// function functionCurrying(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c
//         }
//     }
// }

// console.log('Function Currying ===========>', functionCurrying(1)(2)(3));

// /* Closure */ 

// function outer(){
//     const a = 10;

//     function inner(){
//         console.log(a);
//     }

//     return inner();
// }

// console.log(outer());

// /* Hoisting */ 
/* Allowed */

// a();
// function a(){
//     console.log('A has been called!');
// }

/* NOT Allowed */

// a();
// const a = () => {
//     console.log('A arrow has been called!');
// }

// /* Prototype & Prototype Inheritance */
// /* So here i have attach a new a introducePerson method to person's prototype. like .length & other. */
// /* Example 1 */
// function person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// person.prototype.introducePerson = function () {
//     console.log(`Hi my name is ${this.name} and my age is ${this.age}`);
// }

// const person1 = new person('Rahul', 25);
// person1.introducePerson();

// /* Example 2 */
// const animal = {
//     speak: function () {
//         console.log(this.sound);
//     }
// };

// const dog = Object.create(animal);
// dog.sound = 'Woof!';

// const cat = Object.create(animal);
// cat.sound = 'Meow!';

// dog.speak(); // Outputs: "Woof!"
// cat.speak(); // Outputs: "Meow!"

// /* Shorted Program in Js */ 
// console.log(this);
// console.log(window);
// console.log(this === window);


// var b = 50;
// console.log(this.b);
// console.log(window.b);

// function a() {
//     console.log('====> a');
// }
// window.a();
// this.a()

// var cFun = () => {
//     console.log('ra');
// }
// console.log("c ===========> ", this.cFun);
// console.log("c ===========> ", window.cFun);

// /* Scope In JS */

// function a() {
//     function b() {
//         console.log(c);
//     }
//     return b()
// }
// var c = 10;
// a(); // Js finding variable `c` in global scope, because it's not present in the local scope of function b

// You cannot access, local scope variables i.e `b` in global scope.

// function a() {
//     let b = 10;
// }
// console.log(b);

/* How await works in JS */
// await will pause execution of its own function. not other functions. if fetchData1 takes 1 min & fetchData2 takes 30 seconds fetchData2 will be completed first even if we call the fetchData1 first. that's how the await works.

// async function fetchData1() {
//     console.log('Starting fetchData1...');
//     // Simulate a 1-minute operation
//     await new Promise(resolve => setTimeout(resolve, 60000));
//     console.log('fetchData1 completed!');
// }

// async function fetchData2() {
//     console.log('Starting fetchData2...');
//     // Simulate a network request with a shorter delay
//     await new Promise(resolve => setTimeout(resolve, 5000));
//     console.log('fetchData2 completed!');
// }

// async function main() {
//     console.log('Main function started...');
//     fetchData1();
//     fetchData2();
//     console.log('Main function continued...');
// }

// main();
