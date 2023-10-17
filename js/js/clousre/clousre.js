// function a() {
//   var a = 7;

//   function b() {
//     console.log(a);
//   }
//   b();
// }
// a();

// -------------------------

function a() {
  var a = 7;

  function b() { // b is called as closure, this inner will be returned
    console.log(a);
  }
  return b;
}
let res = a();
// res();

/* Question 2 */

let count = 0;
(function printCount() {
  if (count === 0) {
    let count = 1;
    console.log(count); // Output: 1
  }
  console.log(count); // Output: 0
})//();

/* Q2: Write a function that would allow you to do this. */

function createBase(a) {
  return function (b) {
    console.log('Function Currying With Closure ===>', a + b);
  }
}

// let add = createBase(6);
// add(10);
// add(20);

/* Q3: Time Optimization */
function find(index) {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i
  }

  console.log(a[index]);
}

function findOptimized() {
  let a = [];
  for (let i = 0; i < 1000000; i++) { // Here the loop will run only 1 time.
    a[i] = i * i
  }

  return function (index) {
    console.log(a[index]);
  }
}

// console.time("90")
// find(90)
// console.timeEnd("90")

// console.time("5000")
// find(5000)
// console.timeEnd("5000")

// /* Optimized */

// let optimizedResults = findOptimized(); // The loop will run for only 1 time & return a separate closure function to print the results.
// console.time("90")
// optimizedResults(90)
// console.timeEnd("90")

// console.time("5000")
// optimizedResults(5000)
// console.timeEnd("5000")

// /* Q4. Block Scope & Set timeout*/

// for (var i = 0; i < 3; i++) {
//   function withTheHelpOfClosure(i) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000)
//   }
//   withTheHelpOfClosure(i)
// }

// /* Q5. Create a private counter with Closure */

function counter() {
  var _counter = 0;

  function add(incrementBy) {
    _counter = _counter + incrementBy;
  }

  function getCounterValue() {
    return "Counter " + _counter
  }

  return {
    add,
    getCounterValue
  }
}

// let counterFunction = counter()
// counterFunction.add(20)
// counterFunction.add(20)
// counterFunction.add(20)
// console.log(counterFunction.getCounterValue());

/* Q6. Module pattern is similar to above counter function. Just convert that counter function to IIFI  & assing that IIFI function to any variable*/

// var module = (function counter() {
//   var _counter = 0;

//   function add(incrementBy) {
//     _counter = _counter + incrementBy;
//   }

//   function getCounterValue() {
//     return "Counter " + _counter
//   }

//   return {
//     add,
//     getCounterValue
//   }
// })()

// module.add(20)
// module.add(20)
// module.add(20)

// console.log(module.getCounterValue());;

/* Q7. Call function multiple time but should print only 1 time. */

// `
function printSomething() {
  console.log('Subscribe to dure durrani!');
}

// printSomething();
// printSomething();
// printSomething();

// `

/* Solution: Return a closure function. */

function printSomethingForOneTime() {
  let count = 0;
  return function () {
    if (count === 0) {
      console.log('Subscribe to dure durrani!');
      count++
    }
  }
}

// let print = printSomethingForOneTime();
// print();
// print();
// print();
// print();

/* Q8. Implement Memoize function */

const doSomeCalculations = (num1, num2) => {
  for (let i = 0; i < 100000000; i++) { }
  return num1 + num2;
}

// Add some more `0` in for loop. & check the task manager app on windows.
console.time("5,6")
doSomeCalculations(5, 6)
console.timeEnd("5,6")

console.time("5,6")
doSomeCalculations(5, 6)
console.timeEnd("5,6");

// After Memoize function
function myMemo(fn, context) {
  const cache = {};

  return function (...args) {
    const params = JSON.stringify(args);

    if (!cache[params]) {
      cache[params] = fn.call(context || this, ...args);
    }
    return cache[params]
  }
}

// const letsMemo = myMemo(doSomeCalculations);
// console.time("letsMemo =============> 5,6")
// letsMemo(5, 6)
// console.timeEnd("letsMemo =============> 5,6");

// console.time("2 =============> 5,6")
// letsMemo(5, 6)
// console.timeEnd("2 =============> 5,6");

/*
    * Closure: Inner variable can access of outer & outer variables. that's called closure.
    * Modifying outer variable inside know as shadowing.

    * Here we are calling b outside the function a but it is still giving us the output 7.

    * because b function remembers where it comes from.

    * A function along with its reference will be returned.

    * Closure is useful in 
        * Module design pattern.
        * Currying
        * Function Like once
        * memoize (Time Optimization)
        * maintaining state in async world.
        * setTimeOuts
        * Iterators
        * and many more
        * 
    * 3 Types of scopes (Scope chain)
        * Local Scope
        * Outer Scope
        * Global Scope

    * Function currying is good example of Closure.
*/
