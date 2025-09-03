//spread operator
let fruits =["apple","banana","orange","grape"];
let newfruits = ["mango","kiwi","pear"];
console.log(...fruits, ...newfruits);

//example of merging objects using spread operator
let person = { name: "Logesh", age: 20 };
let extra = { city: "Chennai", hobby: "Badminton" };

let merged = { ...person, ...extra };
console.log(merged);
// { name: "Logesh", age: 20, city: "Chennai", hobby: "Badminton" }

//rest operator
function addNumbers(...numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
}

console.log(addNumbers(1, 2, 3, 4, 5)); // 15
console.log(addNumbers(10, 20)); // 30

//example of using rest operator in destructuring