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
