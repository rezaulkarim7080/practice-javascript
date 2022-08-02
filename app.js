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

class Vehicles {
  //var = "yes";
  constructor(color, pass) {
    this.color = color;
    this.passenger = pass;
    // this.bus = "Car";
  }
  say() {
    console.log(this.color);
  }
}

// let ocj1 = new Vehicles("red", 4);
// let ocj2 = new Vehicles("green", 6);

// console.log(ocj1);
// console.log(ocj2);
class old_Vehicales extends Vehicles {
  constructor(new_wheel, color, pass) {
    super(color, pass);
    this.wheel = new_wheel;
  }
}
let ocj1 = new old_Vehicales("Bus_wheel", "red", 9);
console.log(ocj1);
