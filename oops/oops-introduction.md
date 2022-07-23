# Introduction Oops

### Reference

    - https://betterprogramming.pub/understand-object-oriented-programming-with-typescript-c4ff8afa40d
    - https://www.w3schools.com/js/js_class_intro.asp

1. Object oriented programming centered around objects rather Than functions.

2. Oops is a style of programming.
3. java, js, c#

### Angular, NestJs built around oops

## Core concept of oops

1.  Encapsulation: - group related variables & functions + Increase reusability
2.  Abstraction:- You reduce the impact of change. reduces complexity.
3.  inheritance:- Element redundant code.
4.  polymorphism:- (ManyForms)

### Abstraction:-

    - It means you only expose the necessary details to user of the class.
    - To reach abstraction you have few multiple ways.
        - Abstract class/method
        - interfaces
        - types

### Encapsulation

    - Encapsulation is built on the idea of hiding the data.

    - This is where we restrict the access to specific properties or methods.

    - You cannot access *Private* Properties or Methods outside the class.

    - To access these properties we use *Getters* & *Setters* methods.

### Inheritance

    - It allows you to have code reusability.

    - You can access the methods or properties of *Class A in the Class B* Just by *extending* the *Class A to Class B8 as shown below.

        ```
        Class B extends A {

        }
        ```

### Polymorphism

    - Polymorphism is the ability to create a class with more than one form

    - It means classes can have same methods but different implementations.

    - For example:
        - Class B can access the properties / methods of Class A Just by extending the Class A to Class B.

        - Now Class B can overwrite the properties and methods of its parent class i.e. Class A.

        - *The Child class overwriting the properties of the parent class is called Polymorphism.*

## SettingUp Codebase.

## Objects

    - Creating an objects
    - Factories & Constructors
    - Primitives & reference types
    - working with properties
    - Private properties
    - getters & setters

```
const circle = {
    radius:1
    location:{
        x:1,
        y:2
    },
    draw: function(){
        console.log('Draw function has been called!')
    }
}

circle.draw()
```

## Factory FUnctions.

```
function createCircle(){
    radius,
    draw: function(){
        console.log('Draw function has been called!')
    }
}
const circle = createCircle(1);
circle.draw()
```

## Constructor

1. The constructor method is called automatically when a new object is created.

2. Constructor is a special method.

3. This is executed automatically when a new object is created

4. It is used to initialize the object properties.

5. if you do not define constructor method Js automatically add an empty constructor method.

## Class Inheritance

1. To create a class inheritance, use the `extends` keyword.

2. A class created with class inheritance inherits all the methods from another class.

3. Super method `refers` to the parent class.

4. If you call Super() in the constructor, it means we are calling the `parents constructor method` & then we can get access to the parent properties & methods.

## Getters & Setters

1. This allows you get & set the values.

```
Class Car {
    constructor(brand){
        this.carname = brand
    }

    get carName(){
        return this.carname
    }
    set carName(x){
        return this.carname = x
    }
}
```

```
let myCar = new Car('Audi')
myCar.carName
```

## JavaScript Static Methods

1. Static class methods are defined on the class itself.

2. You cannot call static method on the object. only on an Object Class.

   - Example:-

   ```
   class Car {
       constructor(name){
           this.name = name
       }

       static hello(){
           return 'Hello from static method'
       }
   }
   ```

   ```
   let myCar = new Car('Audi')

   <!-- This will give you an error -->
   myCar.hello

   <!-- This will work -->
   Car.hello
   ```
