a();
b();
// Function Statement OR Function Declaration
function a() {
  console.log("A has been called!");
}

//  Function Expression.
var b = function () {
  console.log("B has been called!");
};

/*
 * The difference between the Function Statement & Function Expression is Hoisting.
 * You cannot call Function Expression before you declare or initialize.
 * Function expression will be treated as same as variables.
 */


//  Named Function Expression:-

var c = function callMe() { 
  console.log("Call me has been called!");
}

// NOTE: you cannot call above function like callMe(). you have to call it like `c()`

// Anonymous function:-

// You cannot use Anonymous functions without name directly.

function {
    
}

//  Above is the invalid syntax. function b is valid syntax.

/*
    * Difference between Parameters & Arguments.
    * We can pass function inside functions & receive that as an args.
    * The ability of to be used as values, pass that function inside another function this ability is called as FirstClass Functions OR FirstClass Citizens.
*/

