 /*FUNCTIONS IN JAVASCRIPT:-
A function can take input, can return a value and can be called multiple times. 
EXAMPLE:-
*/
function sum(a,b){
    return a+b;
}
let add=sum(4,7);
console.log("the sum is"+ add);

 function girl(name){
     console.log("hi"+name+"we will meet tommorow")
 }
 girl("riya")


function sum(a,b,c=9){
    console.log(a,b,c)
    return a+b+c
}
result1=sum(3,5)
result2=sum(3,5,7)
console.log("the sum of these number is",result1)
console.log("the sum of these number is",result2)


const func1=(x)=>{
    console.log("the sum of these numbers is",result1)
    console.log("the sum of these numbers is",result2)
}
func1(45);
func1(60);


// TYPES OF FUNCTION IN JS:
// 1.NAMED FUNCTION:- A traditional way to define a function with a name.
// EXAMPLE:- 
function greet(name){
    return "Hello"+name;
}
console.log(greet("riya"));

//2. Function expression:- A function assigned to a variable. EXAMPLE:
const greet = function(name) {
    return "Hello " + name;
};

console.log(greet("Rita")); // Output: Hello Rita

// 3. Arrow function:- A shorter syntax introduced in ES6.
const greet=(name)=>{
    return "hello"+name;
}
const square= x=>x*x;
console.log(greet("rita"));
console.log(square(14));

//4. Anonymous Function:- A function without a name, usually used as a callback. EXAMPLE:-
setTimeout(function() {
    console.log("This runs after 2 seconds");
}, 2000);


//5. Immediately Invoked Function Expression:-A function that runs immediately after it's defined.
(function() {
    console.log("IIFE ran!");
})();
