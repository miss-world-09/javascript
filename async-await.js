/*ERROR HANDLING IN JAVA:-
Error handling in JavaScript means writing code to detect, manage, and respond to errors so that your program doesn't crash or behave unexpectedly when something goes wrong.

HOW ERRORS ARE HANDLED IN JAVA:-
1. Try...Catch Block:- */
try {
  // Code that might throw an error
  let result = someFunction();
} catch (error) {
  // Handle the error here
  console.log("Error occurred: " + error.message);
}

//THROWING CUSTOM ERROR:-
function divide(a, b) {
  if (b === 0) {
    throw new Error("You cannot divide by zero!");
  }
  return a / b;
}

//USING FINALLY:-
try {
  console.log("Start");
} catch (e) {
  console.log("Error!");
} finally {
  console.log("Always runs");
}

/* async Function:- An async function allows you to write asynchronous code in a clean, readable way, like it's synchronous — but it handles delays (like API calls, timers) behind the scenes.
We can handle error easily by using async.

SYNATX:-
async function myFunction() {
  // do something
}

await():- You use await only inside an async function to pause the function until something finishes (like downloading data, reading a file, etc.).

Rules of await:
1.Can only be used inside an async function
2.Must be used with a Promise
3.It makes code look synchronous (easy to read) even when it's async

EXAMPLE:- */
function fetchData(){
    return new Promise(resolve=>{
        setTimeout(()=>{
            resolve("data is fetched");
        },5000);
    });
}
async function getData(){
    console.log("fetching");
    let result=await fetchData();
    console.log(result);
}
getData();

// EXAMPLE 2:-
function fetchUserData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({name:"disha",url:"https://www.youtube.com/watch?v=1onhvVnL8B8&list=RDHP0L_U8buwY&index=4"});
        },5000)
    })
}
async function getData(){
    try{
        console.log("fetching user data");
        const userData= await fetchUserData();
        console.log("data is fetched successfully");
        console.log("user data",userData);
    } catch(error){
        console.log("error is fetched",error);
    }
}
getData();
