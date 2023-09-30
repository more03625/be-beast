import { theStack } from "./createStackLinkedList";

const isBalance = (string: string): Boolean => {
    let list = null;
    const array = string.replaceAll(" ", "").split("");

    for (let i = 0; i < array.length; i++) {
        if (array[i] === '(') {
            // Insert Into the Stack
            list = theStack.push(array[i]);
        } else if (array[i] === ')') {
            // Check if the stack is empty (no matching opening parenthesis)
            if (theStack.isEmpty()) {
                return false;
            }
            // Remove the matching opening parenthesis from the stack
            theStack.pop();
        }
    }

    return theStack.isEmpty();
}

// let expression = "((a+b) * (c-d)))))))))";
// console.log("==============>", isBalance(expression));

console.log(isBalance("()")); // true
console.log(isBalance("(())")); // true
console.log(isBalance("(()))")); // false
console.log(isBalance(")(")); // false
