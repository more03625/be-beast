// var object = {
//   name: "Rahul",
//   display: () => {
//     console.log(this);
//   },
// };

// var anotherObject = {
//   name: "Yogesh",
// };

// object.display();

// ______________

function a() {
  for (var i = 0; i < 3; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}

a();

// Callback Function:- A Callback function is the function that is passed to another function as an args and executed after some operations has been completed.

function modifyArray(arr, callback) {
  arr.push();
}
