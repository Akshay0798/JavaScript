// const students = {
//     fullName: "Aksandra",
//     age: 23,
//     gender: "female",
//     marks: 95.8,
//     printMarks: function () {
//         console.log("marks = ", this.marks); //?students.marks = this.marks
//     },
// };

//! Objects

// const employees = {
//   //? employees = objects
//   calTax() {
//     //?calTax = function
//     console.log("tax rate is 10%");
//   },
//   calTax2: function () {
//     console.log("tax rate is 50% ");
//   },
// };

// const karanArjun = {
//     salary: 50000,
//     calTax3() {
//         console.log('tax rate is 20%');
//     }}
// karanArjun.__proto__ = employees;

//! classes
// class tata {
//   constructor() {
//     this.brandName = "NexonEC";
//   }

//   start() {
//     console.log("start");
//   }

//   stop() {
//     console.log("stop");
//   }

//   setBrand(brand) {
//     //? brand = argument
//     this.brandName = brand; //?Instance Method setBrand
//     //? this refers to the current instance of the class
//   }
// }

// let nexon = new tata();
// nexon.setBrand("E4 Model");

//! Inheritance in JS - is passing down properties & methods from parent class to child class
/*
class Parent {
  hello() {
    console.log("hello");
  }
}

class Child extends Parent {}

let obj = new Child();

} */

/* class person{
    constructor() {
        this.species= "homologia";
    }
    
    eat() {
        console.log("Eating")
    }
    
    sleep() {
        console.log("Sleeping")
    }
}

class engineer extends person{
    work() {
        console.log("solved problem,build instrument")
    }
}

class doctor extends person{
    treat() {
        console.log("treat patient")
    }
}
let obj1 = new engineer(); */

//! super.constructor

/* class person {
    constructor() {
       console.log("enter parent constructor");
    this.species = "homologia";
  }

  eat() {
    console.log("Eating");
  }
}

class engineer extends person {
    constructor(branch) {
        console.log("enter child constructor");

        super(); //to invoke parent class constructor
        console.log("exist child constructor");

    this.branch = branch;
  }
  work() {
    console.log("solved problem,build instrument");
  }
}

let engobj = new engineer("electrical eng"); */

//************************************************************************************************

/* Qs. You are creating a website for your college. Create a class User with 2 properties, name &
email. It also has a method called viewData( ) that allows user to view website data.*/

/* let DATA = "Personal secret Information";
class User{
    constructor(name, email){
        this.NAME = name;
        this.EMAIL = email;
    }

    viewData() {
        console.log("Viewdata called = ",DATA);
    }
}
let std1 = new User("Akshay","akshay@gmail.com");
let std2 = new User("Suppu","suppu@gmail.com");
let std3 = new User("Preethi","preethi@gmail.com"); */

/*Qs. Create a new class called Admin which inherits from User. Add a new method called
editData to Admin that allows it to edit website data.*/

let DATA = "Personal secret Information";
class User {
  constructor(name, email) {
    this.NAME = name;
    this.EMAIL = email;
  }

  viewData() {
    console.log("Viewdata called = ", DATA);
  }
}

class Admin extends User {
  constructor(name, email) {
    //? call a parent constructor for that use super()
    super(name, email);
  }

  editData() {
    DATA = "change secret information";
  }
}
let std1 = new User("Akshay", "akshay@gmail.com");
let std2 = new User("Suppu", "suppu@gmail.com");
let std3 = new User("Preethi", "preethi@gmail.com");

let Admin1 = new Admin("Bujjinannu", "bujji@gmail.com");
