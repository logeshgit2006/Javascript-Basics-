function name (input_name){
    console.log("hello"+input_name);   
}
name (" logesh");

//return function example
function add(a,b){
    return a+b; //return keyword
}
let result = add(5, 10);
console.log(result); //15

//without return statement
function multiply(a, b){
    console.log(a * b);
}
let ans = multiply(4, 5); //20
console.log(ans); //undefined