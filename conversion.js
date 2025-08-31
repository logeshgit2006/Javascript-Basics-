// String to Number
let str = "123";
let num = Number(str);
console.log(typeof num, num);  // number 123

// Number to String
let n = 456;
let s = String(n);
console.log(typeof s, s);  // string "456"

// Boolean Conversion
console.log(Boolean(1));  // true
console.log(Boolean(0));  // false
console.log(Boolean("")); // false
console.log(Boolean("hi")); // true

// Automatic type coercion
console.log("5" + 2);   // "52" (string + number => string)
console.log("5" - 2);   // 3   (string converted to number)
