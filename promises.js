/* PROMISES IN JS:-
A Promise in JavaScript is a way to handle asynchronous operations — things that take time, like loading data or waiting for a response from a server.

Promise States:
1.Pending – The task is still going on 
2.Fulfilled – The task completed successfully 
3.Rejected – The task failed 

EXAMPLE:- */
function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let success=false;
            if(success){
                resolve("data fetched successfully");
            } else{
                reject("error in fetching the data");
            }
        },3000);
    });
}
fetchData()
.then((data)=>console.log(data))
.catch((error)=>console.log(error));

let promise=new Promise((resolve,reject)=>{
    let success=true;
    setTimeout(()=>{
    if(success){
        resolve("task is completed");
    } else{
        reject("reject");
    }
},5000);
});
promise
.then((data)=>console.log((data)))
.catch((error)=>console.log(error));


/* Prototypal Inheritance:- Prototypal inheritance is how objects in JavaScript can inherit properties and methods from other objects.
EXAMPLE:- */
let animal={
    eat:true,
    walk:function(){
        console.log("animal can walk");
    }
};
let dog=Object.create(animal);
dog.barks=true;
console.log(dog.eat);
console.log(dog.barks);
dog.walk();

/* EXPLANATION OF ABOVE CODE:- 
1.Object.create(animal) → makes a new object with animal as its prototype.
2.When you do dog.eats, JS looks in dog, doesn’t find it, then looks in animal.
3.This is called prototypal inheritance. */ 


/* THIS AND BINDING CONTEXT:-
this:-this refers to the "owner" of the function, or the context in which a function is called.
Example:- */
const user = {
  name: "Rita",
  greet: function () {
    console.log("Hi, my name is " + this.name);
  }
};
user.greet(); // "Hi, my name is Rita"
/*(Here, this refers to the object user, because the function is being called on that object.)


BINDING CONTEXT:- 
binding context = value of this inside a function.
It is important Because the value of this changes depending on how you call the function, not just where it's written.
Bind always work when we use this().
EXAMPLE 1:-
*/
const useer={
    name:"Rita",
    greet:function(){
        console.log("hello my name is "+this.name);
    }
};
useer.greet();

const greetFunction=useer.greet;
greetFunction();

const boundGreet=useer.greet.bind({name:"jon"});
boundGreet();

//EXAMPLE 2:-
const userr={
    name:"rita",
    greet:function(){
        console.log("my name is"+this.name);
    }
};
userr.greet();
// const say=user.greet;
// say();
const sayHi = userr.greet.bind(userr);
sayHi(); 


/* call() method:-
When you want to call a function immediately with a specific this.
Syntax:- fn.call(thisArg, arg1, arg2).
Argument Format:- Separate Arguments.

apply() method:-
Same as call(), but when arguments are in an array
Syntax:-fn.apply(thisArg, [arg1, arg2])
Argument Format:- Argument as an array

bind() method:-
When you want to save a function with this bound, but call it later
Syntax:-let newFn = fn.bind(thisArg)
Argument Format:-Arguments can be added later.

*/
const person1 = { name: "Rita" };
const person2 = { name: "Tiya" };

function greet(greeting) {
    console.log(`${greeting}, I am ${this.name}`);
}

//call():-
greet.call(person1, "Hello");  // Output: Hello, I am Rita
greet.call(person2, "Hi");     // Output: Hi, I am Tiya

//apply():-
greet.apply(person1, ["Hello"]);  // Output: Hello, I am Rita
greet.apply(person2, ["Hi"]);     // Output: Hi, I am Tiya

//bind():-
const greetRita = greet.bind(person1, "Hey");
const greetTiya = greet.bind(person2, "Hola");
greetRita();  // Output: Hey, I am Rita
greetTiya();  // Output: Hola, I am Tiya



