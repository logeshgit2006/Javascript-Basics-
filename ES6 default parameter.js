function greet(name = "Guest") {
  console.log("Hello, " + name);
}

greet("Logesh");  // Hello, Logesh
greet();          // Hello, Guest  (because no argument, so default value)

function multiply(a, b = 1) {
  return a * b;
}       
console.log(multiply(5, 2)); // 10
console.log(multiply(5));    // 5  (b defaults to 1)
console.log(multiply(5, 0)); // 0  (b is explicitly set to 0)
