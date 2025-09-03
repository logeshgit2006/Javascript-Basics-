works

🔹 1. Variables

Definition:
Variables are containers for storing data values. In JavaScript we use var, let, or const.

Example:

let name = "Logesh";
const age = 20;
var city = "Chennai";

console.log(name, age, city);


How it works:

let → can be changed later.

const → fixed, cannot be reassigned.

var → old way, not recommended.
Output → Logesh 20 Chennai

🔹 2. Functions

Definition:
A function is a block of code that runs when it is called.

Example:

function greet() {
  console.log("Hello!");
}
greet();


How it works:

function greet() defines the function.

greet(); calls the function.

Output → Hello!

🔹 3. Arrow Function

Definition:
Arrow functions are a shorter way to write functions.

Example:

const greet = () => {
  console.log("Hello from arrow function!");
};
greet();


How it works:

=> is arrow syntax.

Works same as normal function.

Output → Hello from arrow function!

🔹 4. Callback Function

Definition:
A callback is a function passed as an argument to another function.

Example:

function prepareFood(callback) {
  console.log("Mom is cooking...");
  callback();
}

function eatFood() {
  console.log("I am eating food!");
}

prepareFood(eatFood);


How it works:

prepareFood takes callback as input.

Inside it, after cooking, it calls eatFood.

Output →

Mom is cooking...
I am eating food!

🔹 5. Objects

Definition:
Objects store multiple values in key-value pairs.

Example:

let person = { name: "Logesh", age: 20, city: "Chennai" };
console.log(person.name);  // Logesh


How it works:

name, age, city are keys.

Logesh, 20, Chennai are values.

Output → Logesh

🔹 6. Promises

Definition:
A promise is used for handling asynchronous tasks like fetching data.

Example:

let promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) resolve("Task Completed!");
  else reject("Task Failed!");
});

promise.then((msg) => console.log(msg))
       .catch((err) => console.log(err));


How it works:

resolve → success case.

reject → error case.

.then() runs if resolved.

.catch() runs if rejected.

Output → Task Completed!

🔹 7. Classes

Definition:
Classes are templates for creating objects.

Example:

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hi, I am ${this.name}`);
  }
}

let p1 = new Person("Logesh", 20);
p1.greet();


How it works:

class defines a blueprint.

constructor initializes values.

p1.greet() → Hi, I am Logesh

🔹 8. Modules

Definition:
Modules let us split code into different files and reuse them.

Example:
📂 math.js

export function add(a, b) {
  return a + b;
}


📂 main.js

import { add } from "./math.js";
console.log(add(2, 3)); // 5


How it works:

export → share function outside.

import → bring it to another file.

Output → 5

🚀 Conclusion

This repo is my step-by-step JavaScript practice.
Anyone can clone it and run the examples using Node.js or in the browser console.
