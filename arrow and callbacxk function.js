//normal function 
function add(a,b){
    return a+b;
}
result = add(2,3);
console.log((result));

//same thing with arrow function 
let adds=(c,d) => c+d;
results= adds(5,5);
console.log((results));

//callback function example
function prepareFood(callback) {
  console.log("Amma cooking food... 🍳");
  
  // after cooking is done, amma calls you
  callback();
}

function eatFood() {
  console.log("Na saptaachu 😋");
}

prepareFood(eatFood);
//output
//Amma cooking food... 🍳
//Na saptaachu 😋

//callback function with arrow function
function prepareFoods(callback) {
  console.log("Amma cooking food... 🍳") 
  callback();
}

let eatFoods = () => {
  console.log("Na saptaachu 😋");
}
prepareFoods(eatFoods);

/*Callback Trivia ❓

Imagine neenga hotel ku order kudukkuringa:

Neenga waiter kitta order kudukuringa → placeOrder(callback).

Waiter kitchen ku order anupuran → cooking process nadakuthu.

Food ready aana → waiter ungala callback pannuvan.

Appo neenga sapduringa → eatFood().

👉 Question:
If waiter forget panna callback (food ready-nu sollaama poitan), neenga enna panreenga?

A. You’ll still eat the food.
B. You’ll keep waiting, food ready nu theriyama.
C. Hotel fire aagidum 😂 */

function giving_order(callback){
    console.log("I am giving order to waiter");
    callback();
    
}
function waiter_arguement(callback){
    console.log("Waiter says cooking food is on the way");
    callback();
}
function cooking_food(){
    console.log("Food is ready, please eat");
}
giving_order(function(){
    waiter_arguement(cooking_food);
});