//if else statement example
let age = 18;

if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}

//else if example
let marks = 75;

if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 60) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}

let x = 10;
let y = 20;

// AND
console.log(x > 3 && y > 3); // true

// OR
console.log(x > 15 || y > 15); // true

// NOT
console.log(!(x > 5)); // 

//terenary operator example(shortcut for if else)
let age1 = 16;
let msg = (age1 >= 18) ? "Adult" : "Minor";
console.log(msg);  // Minor
