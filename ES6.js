//old version of js
var a = 10;
var a = 20; //redeclared
console.log(a); //20

//new version of js
let b = 10; //let b = 20; //error: Identifier 'b' has already been declared
b=20; //reassigned
console.log(b); //20

//const -> constant value
const pi = 3.14;//pi = 3.14159; //error: Assignment to constant variable.
console.log(pi); //3.14

//but small twist with constant
const fruits = ["apple", "banana"];
fruits.push("orange"); //allowed
console.log(fruits); //["apple", "banana", "orange"]