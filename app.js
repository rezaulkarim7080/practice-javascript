//const circle = require("./circle");

//console.log(circle.area(5));

// var a= 34;
// console.log(a);
// var a = "rexza";
// console.log(a);

// let  a= 34;
// console.log(a);
// let a = "rexza";
// console.log(a);

// function hello () {
//     console.log("Hello world");
// }
// hello();

///// Arrow function ///

// let say = ()=>{
//  console.log(" i am arrow function");

// }
// say();

// let Name_Age = (name,age)=>{
//     console.log(name,age);

//    }
//    Name_Age("reza",34);
// let name = name => name;
// console.log("karim");

/////////  CLASS //////////

// class Vehicles {
//   var = "yes";
//   constructor(color, pass) {
//     this.color = color;
//     this.passenger = pass;
// this.bus = "Car";
//   }
//   say() {
//     console.log(this.color);
//   }
// }

// let ocj1 = new Vehicles("red", 4);
// let ocj2 = new Vehicles("green", 6);

// console.log(ocj1);
// console.log(ocj2);

////////  INHERETANCE /////////

// class Vehicles {
//   var = "yes";
//   constructor(color, pass) {
//     this.color = color;
//     this.passenger = pass;
// this.bus = "Car";
//   }
// }

// class old_Vehicales extends Vehicles {
//   constructor(new_wheel, color, pass) {
//     super(color, pass);
//     this.wheel = new_wheel;
//   }
// }
// let ocj1 = new old_Vehicales("Bus_wheel", "red", 9);
// console.log(ocj1);

//// spread operator //

// let num1 = [1, 2, 5];
// let num2 = [4, 5, 6, 7];
// let arr = [...num1, ...num2];
// console.log(arr);

/// object /////

// let per1 = {
//   name: "reza",
//   roll: 132,
// };
// let per2 = {
//   city: "Chittagong",
//   age: 43,
//   class: "versity",
// };

// let arr = { ...per1, ...per2 };
// console.log(arr);

///// rest oprator ///

// let array = (...arr) => console.log(arr);

// array(1, 2, 3, 4, 5);

////// function mapping ////

// let num = [1, 2, 3, 4, 5, 6];
// let squeres = num.map(function (item) {
//   return item * item;
// });
// console.log(squeres);

// ////   function mapping with arrow function ////

// let cubes = num.map((item) => {
//   return item ** 3;
// });
// console.log(cubes);

//////////  ASynCRONAS POGRAMMING /////////

// console.log("line 1");

// setTimeout(() => {
//   console.log("inside setTime out!");
// }, 3000);

// console.log("line 2");

// const student = getStudent(1);
// console.log(student);

// function getStudent(id) {
//   setTimeout(() => {
//     console.log("fething from database...");
//     return { id: id, name: "karim" };
//   }, 2000);
// }

//////////  CALL BACK FUNCTION FOR  ASynCRONAS POGRAMMING /////////

console.log("Line Number 1");

getStudent(2, (student) => {
  console.log(student);
});

console.log("Line Number 2");

function getStudent(id, callback) {
  setTimeout(() => {
    console.log("fething from database...");
    callback({ id: id, name: "karim" });
  }, 2000);
}
