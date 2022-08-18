/*

    * Promises handle asynchronous operations in javascript.
    * Promises are created to solve the callback hell issue.
    
    * When promises were used in many places, promise chaining started creating some problems together. Using the promises comes with complexity as well.
   
    * To avoid promise handling and chain there is a new syntactic sugar added to javascript with ES2017. This brings async / await to the javascript scene.
    * Async/Await reduced the complexly of promise handling.


    * await keyword.
   
        * From the name of await, you can understand it waits for the async functions to complete.
    
        * Promise chaining is .then & .catch.
        * Cleaner way is to use Async & Await which will help us more to debug.
        * It was introduced in ECMA 2017
        * async/await is built on promises.
        * Promises were introduced in ES2015. IN 2 YEAR js devs identified that promises could not be the ultimate solution.
        * Promises were introduced to solve the famous callback hell problem.
        * 
        * Graph is like Callback ---> Promises ----> Async Await

*/

/*
    const doSomethingAsync = () => {
        return new Promise((resolve) => {
            setTimeout(() => resolve("I did something"), 3000);
        });
    };

    const doSomething = async () => {
        console.log(await doSomethingAsync());
    };

    doSomething();
*/

/*
 * Promise: is the javascript object
 */
