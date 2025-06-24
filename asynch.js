/* ASYNCHRONOUS JS:-  doing something else while waiting!
JavaScript normally runs one line at a time, from top to bottom — this is synchronous.
But with asynchronous code, JavaScript can:
Start a task (like fetching data from the internet ),
Keep doing other things,
And come back later when the task is done .


EVENT LOOP:- The Event Loop is the mechanism in JavaScript that helps it handle:
Synchronous code (runs line by line)
Asynchronous tasks (like setTimeout, fetch, or user events)

WORKING OF EVENT LOOP STEP BY STEP:-

1.Call Stack
This is where your code runs line by line.
2.Web APIs / Browser APIs
When you use things like setTimeout(), fetch(), or addEventListener(), JavaScript gives them to the browser to handle.
3.Callback Queue
When these tasks finish (e.g., 2 seconds pass for setTimeout), they go to the queue, waiting to run.
4.Event Loop
The event loop checks:
“Is the call stack empty?”
If yes, it takes the next function from the callback queue and puts it on the stack to run.

*/

console.log("hi");
function sayhello(){
    console.log("i would like to say hello");
}
setTimeout(()=>{
    sayhello();

},5000); //WAIT FOR 5 SEC THEN EXECUTE.

console.log("hey");

for(let index=0;index<10;index++){
    console.log(index);
}

/* QUESTIONS ON ASYNCH EVENT LOOPS:-
Task 1: Simulating Asynchronous Behavior
Create a function simulateAsyncTask() that logs “Task started”, then after 2 seconds logs “Task finished”.
Use setTimeout to simulate this behaviour.
*/
function simulateAsyncTask() {
    console.log("Task started");
    
    setTimeout(() => {
        console.log("Task finished");
    }, 2000);
}
simulateAsyncTask();

/*Task 2: Simulate Multiple Async Tasks with Different Delays
Create a function simulateMultipleTasks() that starts three asynchronous tasks with different delays (1 second, 2 seconds, and 3 seconds).
Each task should log "Task [n] finished" where [n] is the task number. Ensure the tasks run asynchronously.
*/
function simulateMultipleTasks(){
    setTimeout(()=>{
        console.log("Task 1 finished");
    },1000);
    
    setTimeout(()=>{
        console.log("Task 2 finished");
    },1000);
    
    setTimeout(()=>{
        console.log("Task 3 finished");
    },1000);
}
simulateMultipleTasks();

/* Task 3: Async Task with Callback Function
Create a function fetchDataWithCallback(callback) that simulates fetching data asynchronously using setTimeout (after 2 seconds).
Once the data is “fetched”, it should invoke the provided callback function with "Fetched data" as an argument.
*/
function fetchDataWithCallback(callback) {
    console.log("Fetching data...");

    setTimeout(() => {
        const data = "Fetched data";
        callback(data);
    }, 2000);
}

fetchDataWithCallback(function(result) {
    console.log("Callback received:", result);
});


