// Objects in JavaScript are collections of key-value pairs.
// Each value can be a string, number, array, another object, or a function (method).
// Objects are used to store and manage data in a structured way.

// There are two main ways to create an object:

// 1.) Object Literal Notation:
let vehicle = {};
// console.log(vehicle);
vehicle.brand = "Toyota";
// console.log(vehicle);
vehicle["model"] = "Camry";
// console.log(vehicle);
// console.log(vehicle.model);
// console.log(vehicle["model"]);

const person = {
  name: "John",
  "his country": "United States",
  age: 30,
  profession: "Engineer",
  greet: function () {
    console.log("Hello, my name is " + person.name);
  },
  drive: (carname) => {
    console.log(carname + " Vroooooooooooooom...");
  },
};

// person.greet();
// console.log(person);

// person.drive('Tesla');

// 2.)  Using new Object() Syntax:

const car = new Object();
// console.log(car);
car.brand = "Toyota";
car.model = "Corolla";
car.year = 2020;

  // console.log(car);

//   Accessing Object Properties
//   You can access object properties in two ways:

//   Dot Notation:
  // console.log(person.name);  // Output: John

// Bracket Notation (useful when keys are dynamic or have spaces):
  // console.log(person['age']);  // Output: 30

//   Methods
//   A method is a function that is a property of an object.
//   In the above example, greet is a method of the person object.
// person.drive('Toyota');

// Destructuring Objects
// Destructuring allows you to unpack values from objects into distinct variables.

// const number = person.age;
const { age:number, drive: driver, greet  } = person;
// driver('mercedes benz');
// greet();

// const { age : my_Age, name, drive } = person;
// const age = person.age;
// console.log(my_Age);
// console.log(age);
// const name = person.name;
// console.log(name);
// console.log(age);   // Output: 30

// Nested Object Destructuring
// You can destructure nested objects too:
const student = {
  name: "Tom",
  scores: {
    math: 90,
    english: 85,
  },
};

// const english = student.scores.english;
// console.log(english);
// const english = student["scores"]["english"];
// console.log(english);

  const { scores } = student;
  // const { math, english } = scores;
const {  scores: { english, math }} = student;
// console.log(english);

  // console.log(math);    // Outputs: 90
  // console.log(english); // Outputs: 85

const myVehicle = {
  brand: "Toyota",
  model: "Hilux",
  colors: ["Blue", "Green", "red", "Yellow", ["Pink", "brown"], {animals: 'Turkeys and Chickens'}],
  isAvailable: true,
  engineStats: {
    mileage: 1000,
    props: {
      electric: {
        batterySize: 10000,
        chargers: ["10W", "20W", "50W", [2, [2, 4.5, {cook: () => {console.log("You are cooked bro!")}}]]],
      },
    },
  },
};

// myVehicle.engineStats.props.electric.chargers[3][1][2].cook();

const { engineStats: {props: {electric: {chargers}}}, colors} = myVehicle;
// console.log(chargers)
// chargers[3][1][2].cook();
// console.log(colors[5].animals);
// console.log(colors[5]["animals"]);

// const { colors,
//   engineStats: {
//     props: {
//       electric: { batterySize, chargers },
//     },
//   },
// } = myVehicle;
// console.log(colors[4][1], batterySize, chargers[2]);
// console.log({ batterySize });
// console.log(chargers[2]);

//  Spread Operator (...)
// The spread operator (...) allows you to copy or merge objects and arrays, as well as to unpack elements.

// Copying an Object
const person34 = {continent: 'Africa', Age: 345, Name: "John"}
const person2 = person34;
// console.log(person2);

// Copying an Array.
const cars = ["Toyota", "Ford", "BMW"];
const cars2 = [...cars, "Honda"];
// console.log(cars2);

// Merging Objects
// You can merge multiple objects using the spread operator:
const obj1 = { x: 1, q: 2 };
const obj2 = { y: 5, z: 3 };

const merged = { ...obj1, ...obj2 }; // `y` will be overwritten by obj2's `y`
console.log(merged);  // Outputs: { x: 1, y: 5, z: 3 }

// Adding or Overwriting Properties in an Object
// You can add or modify properties while spreading:

const person3 = { name: "John", age: 30 };
const updatedPerson = { ...person3, city: "lagos", age: 35 };

// console.log(updatedPerson);

// Deleting Properties in an Object
const person4 = { name: "John", age: 30, city: "New York" };
const deletedPerson = { ...person4 };
delete deletedPerson.city;

console.log(deletedPerson);

// Object Methods
// There are built-in methods to manipulate objects.

// Object.keys()
// Returns an array of the object’s keys.
const citizen = { name: "John", age: 30 };
console.log(Object.keys(citizen));

// Object.values()
// Returns an array of the object’s values.
console.log(Object.values(citizen));

// Object.entries()
// Returns an array of key-value pairs.
console.log(Object.entries(citizen));

// this Keyword
// In JavaScript, this refers to the current object the code is being written in.
// Inside an object method, this refers to the object.
const user = {
  name: "Emma",
  greet: function () {
    console.log("Hello, " + this.name);
  },
};

// user.greet();

//   Object Shorthand Syntax
//   When creating objects, if the key and variable name are the same, you can use shorthand syntax:
const myName = "Mark";
const myAge = 22;

const myDetails = { myName, myAge };
// console.log(myDetails);

// Object Property Computation
// You can dynamically define property keys using square brackets.
const keyName = "color";
const myCar = {
  brand: "BMW",
  [keyName]: "red",
};

// console.log(car);

// Object freeze() and seal()

// Object.freeze(): Prevents modification of properties in the object.
const obj = { a: 1 };
// Object.freeze(obj);
obj.b = 10;
obj.a = 2; // No effect, because the object is frozen
// console.log(obj);

// Object.seal(): Allows modification of existing properties but prevents new properties from being added.
const myObj = { a: 1 };
Object.seal(myObj);
myObj.a = 2; // Allowed
myObj.b = 3; // Not allowed
console.log(myObj);

//Class Work
// 1.) create an Object called myStudent
// 2.) give it a name property and assign a string value to it
// 3.) give it a grades property and assign an array of 7 numbers to it

const myStudent = {
  name: "Bob",
  scores: [12, 67, 90, 25, 50, 71, 84, 52, 99, 30],
  getHighestScore: function(){    
    let highestScore = this.scores[0];
    for(let q = 0; q < this.scores.length; q++){        
      if(this.scores[q] > highestScore){
        highestScore = this.scores[q];
      }      
    }
    console.log(`${this.name} highest score is ${highestScore}`);
  },
  getLowestScore: function(){
    let lowestScore = this.scores[0];
    for(let q = 0; q < this.scores.length; q++){        
      if(this.scores[q] < lowestScore){
        lowestScore = this.scores[q];
      }      
    }
    console.log(`${this.name} lowest score is ${lowestScore}`);  },
  calculateAverageScore: function(){
    let totalScore = 0;
    for(let q = 0; q < this.scores.length; q++){        
      totalScore =  totalScore + this.scores[q];
    }
    let averageScore = totalScore / this.scores.length;
    console.log(`${this.name} average score is ${averageScore}`);
  }
}

// myStudent.getHighestScore();
// myStudent.getLowestScore();
// myStudent.calculateAverageScore();