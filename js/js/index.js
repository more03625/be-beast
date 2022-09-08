let myNameOne = {
  firstName: "Rahul",
  lastName: "More",
};
let myNameTwo = {
  firstName: "Sachin",
  lastName: "Tendulkar",
};

let printMyName = function (hometown, state) {
  console.log(this.firstName, this.lastName + " " + hometown + " " + state);
};

// printMyName.call(myNameOne, "Mumbai", "India")
printMyName.apply(myNameTwo, ["Mumbai", "Maharashtra"]);
let ok = printMyName.bind(myNameTwo, "MKBHD", "Maharashtra")();

const functionA = async () => {
  var test = async () => {
    await console.log('a')
  }
  setTimeout(() => {
   
  }, 2000)
  
  console.log(await test());
  
  console.log('b')
}
console.log(functionA())