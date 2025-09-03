let person = { name: "Logesh", age: 20, city: "Chennai" };
console.log(person.name); // Logesh
console.log(person.age); // 20  
console.log(person.city); // Chennai\

//destructuring
let { name, age, city } = person;
console.log(name,age,city); // Logesh 20 Chennai

//array destructuring
let fruits = ["apple", "banana", "orange"];

let [first, second, third] = fruits;

console.log(first);  // apple
console.log(second); // banana
console.log(third);  // orange

//skipping elements
let [one, , three] = fruits;
console.log(one);  // apple
console.log(three);  // orange

//updating values
let [fruit1, fruit2, fruit3] = fruits;
fruit1 = "kiwi";
console.log(fruit1);  // kiwi
console.log(fruit2);  // banana
console.log(fruit3);  // orange 
