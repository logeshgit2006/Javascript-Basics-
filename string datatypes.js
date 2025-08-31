let name = 'John Doe';
let age = 30;

//backticks for string interpolation
console.log("my name is ${name}, and I'm ${age} years old.");

//conactenation
console.log("my name is " + name + ", and I'm " + age + " years old.");

//template literals
console.log(`my name is ${name}, and I'm ${age} years old.`);

//length
let word = "Hello, World!";
console.log(word.length); // Outputs: 13

//toUpperCase and toLowerCase
console.log(word.toUpperCase()); // Outputs: "HELLO, WORLD!"
console.log(word.toLowerCase()); // Outputs: "hello, world!"

//index
let string = "Hello, World!"
console.log(string[4]);

//some usefull string methods
let text = "   JavaScript is Awesome!   ";

console.log(text.toUpperCase());   // JAVASCRIPT IS AWESOME!
console.log(text.toLowerCase());   // javascript is awesome!
console.log(text.trim());          // removes spaces
console.log(text.includes("Awesome")); // true
console.log(text.replace("Awesome", "Cool")); // JavaScript is Cool!
console.log(text.split(" "));  // [ 'JavaScript', 'is', 'Awesome!' ]

