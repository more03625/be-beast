// `this`
// 1. Implicit & Explicit Binding
// Implicit Binding: When you invoke a function in an object using a dot notation.
let calc = {
    a: 5,
    b: 10,
    add() {
        return this.a + this.b
    }
}

// calc.add() // Implicit binding.

// Explicit Binding
// Call, Apply, Bind

// Let's try this keyword!.
// This refers to the current Object.
/* Example 1*/
// console.log(this);

/* Example 2*/

let dummyObject = {
    a: 10,
    b: 20,
    otherObject: {
        // a: 10,
        // b: 30,
        add() {
            console.log(this); // This refers to current Object, which is otherObject. & in Other Object there are no values like a & b so its undefined. undefined + undefined is NaN.
            return this.a + this.b;
        }
    }

}
// const add = dummyObject.otherObject.add();
// console.log(add);

/* Example 3: With Arrow Functions*/

let user = {
    name: "Rahul",
    age: 24,
    getDetails() {
        const arrowFunction = () => {
            console.log(this.name); // In Arrow function `this` keyword refers to parent functions Object.
        }
        arrowFunction()
    }
}

// user.getDetails()

/* Example 4: this keyword in class */

class UserClass {
    constructor(n) {
        this.name = n
    }

    getName() {
        console.log("Console ===> ", this.name); // this refers to constructor scope. 
    }
}
// const User = new UserClass("Rahul")
// console.log("User Function Calling ===> ", User);

/* Example 5: */

const userObjectOne = {
    firstName: "Rahul",
    getName() {
        const firstName = 'Yogesh';
        return this.firstName
    }
}
// let myname = userObjectOne.getName()
// console.log('myname ===> ', myname);

/* Example 6 */
function makeUser() {
    return {
        name: "Rahul",
        ref: this,
    }
}

// const makeUserResponse = makeUser();
// console.log("makeUserResponse ===> ", makeUserResponse.ref.name); // it will print empty. because while calling makeUser() this will point to window obj & window obj have nothing like `name`.

/* Example 7: FIX above function, it should print name "Rahul" */

function makeUserNew() {
    return {
        name: "Rahul",
        ref() {
            return this
        }
    }
}

// const makeUserNewResponse = makeUserNew();
// console.log('makeUserNewResponse ===> ', makeUserNewResponse.ref().name);

/* Example 8:  */

const userObj = {
    name: "Rahul More setTimeout",
    logMessage() {
        console.log("setTimeout", this.name);
    }
}


// let userName = setTimeout(function () {
//     userObj.logMessage()
// }, 1000)

/* Example 9:  */

var length = 4;

function callback() {
    return this.length;
}

const callBackObject = {
    length: 5,
    method(fn) {
        return fn()
    }
}

// const callbackFunctionResult = callback();
// console.log(callbackFunctionResult); 

const objectCallbackResult = callBackObject.method(callback);
console.log('objectCallbackResult', objectCallbackResult);
