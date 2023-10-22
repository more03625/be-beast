let multiply = function (x, y) {
   console.log(x * y)
}

//  Create a copy of multiply function, by using bind function.
let multiplyByOne = multiply.bind(this, 2)
multiplyByOne(3) // This is what function currying is.

// So this is how we curry our methods. we make a copy of methods using bind function, and we create more methods out of it.
//  By presetting some args inside the functions.


// Function Currying using Closures

let multiplyUsingClosures = function (x) {
   return function (y) {
      console.log(x * y)
   }
}

let mul = multiplyUsingClosures(10)(2)


// Curry f for 2 Args. translate it into function that runs as f(a)(b)

function curry(f) {
   return function (a) {
      return function (b) {
         return f(a, b)
      }
   }
}

let sum = function (a, b) {
   return a + b
}

let curriedSum = curry(sum)
curriedSum(1)(2)
// let passValueInVariableA =  curriedSum(1)
// let passValueInVariableB = passValueInVariableA(200)
// console.log("🚀 ~ file: currying.js ~ line 41 ~ passValueInVariableB", passValueInVariableB)

// /* Curring & Partial Application */

function a(a) {
   return function b(b, c) {
      return a + b + c
   }
}

// const partialCurrying = a(10)
// console.log(partialCurrying(2, 3));