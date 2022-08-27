Function.prototype.myBind = function () {
  console.log("OK");
};

let userObject = {
  firstName: "Rahul",
  lastName: "More",
};

let printMyName = function () {
  console.log(this.firstName, this.lastName);
};

let printUsersName = printMyName.myBind(userObject)();
