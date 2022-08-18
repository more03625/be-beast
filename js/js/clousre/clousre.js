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

  function b() {
    console.log(a);
  }
  return b;
}
let res = a();

res();

/*
    * Here we are calling b outside the function a but it is still giving us the output 7.

    * because b function remembers where it comes from.

    * A function along with its reference will be returned.

    * Closure is useful in 
        * Module design pattern.
        * Currying
        * Function Like once
        * memoize
        * maintaining state in async world.
        * setTimeOuts
        * Iterators
        * and many more
*/
