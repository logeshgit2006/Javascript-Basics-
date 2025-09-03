let fruits = ["apple", "banana", "orange", "grape"];
console.log(fruits[0]); // Output: apple
console.log(fruits[2]); // Output: orange

//push
fruits.push("mango");
console.log(fruits); // Output: ["apple", "banana", "orange", "grape", "mango"]

//pop 
//removes the last element
fruits.pop();
console.log(fruits); // Output: ["apple", "banana", "orange", "grape"]

//unshift +> adds an element at the beginning
fruits.unshift("kiwi");
console.log(fruits); // Output: ["kiwi", "apple", "banana", "orange", "grape"]

//shift -> removes the first element
fruits.shift();
console.log(fruits); // Output: ["apple", "banana", "orange", "grape"]

//splice -> removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
fruits.splice(1, 2, "pear", "peach");
console.log(fruits); // Output: ["apple", "pear", "peach", "grape"]
//removes 2 elements starting from index 1 and adds pear and peach

//FOR EACH
let numbers = [1, 2, 3, 4];
numbers.forEach(function(number) {
    console.log(number * 2);
});
// Output: 2, 4, 6, 8

//map -> creates a new array with the results of calling a provided function on every element in the calling array.
let doubled = numbers.map(function(number) {
    return number * 2;
});

//filter -> creates a new array with all elements that pass the test implemented by the provided function.
let num=[1,2,3,4,5,6,7,8,9];
let even=num.filter(num=>num%2==0);
return even; // [2,4,6,8]