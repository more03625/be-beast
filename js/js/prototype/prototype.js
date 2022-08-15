// Prototypal inheritance

let object = {
  name: "Rahul",
  city: "Mumbai",
  getIntro: function () {
    console.log("Calling get intro!");
  },
};

let object2 = {
  name: "Yogesh More",
};

object2.__proto__ = object;

// So this is what prototypal inheritance is.
// Object 2 is inheriting properties of object.
