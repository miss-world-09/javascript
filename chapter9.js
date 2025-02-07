// FUNCTIONS IN JS:-
// SYNATX:-
function functionname(parameter1,parameter2){
    // function body
    // code to be executed
    return value; //optional
}

// FUNCTION DECLARATION:- DEFINED A NAMED FUNCTION USING FUNCTION KEYWORD. EX:
function greet(name){
    return `hello,${name}!`;
}
console.log(greet("john"));

// FUNCTION EXPERSSION:- DEFINES A FUNCTION AS A PART OF AN EXPRESSION, TYPICALLY BY ASSIGNING IT TO THE VARIABLE.
const gret=function(name){
    return `hello ${name}`;
}
console.log(gret("riya"));

// ARROW FUNCTION:- PROVIDE A CONCISE SYNTAX FOR WRITING FUNCTIONS.
const geet=(name)=>{
    return`hello ${name}`;
};
console.log(geet("jiya"));

// CALLBACK FUNCTIONS:- FUNCTIONS CAN BE PASSED AS ARGUMENT TO OTHER FUNCTION.
function fetchdata(CALLBACK){
    setTimeout(()=>{
        const data="data fetched successfully";
        CALLBACK(data);
    },200);
}
function processdata(data){
    console.log(`processing data:${data}`);
}
fetchdata(processdata);

// RETURNING FUNCTION:- FUNCTION CAN RETURN OTHER FUNCTION, ENABLING THE CREATION OF HIGHER-ORDER FUNCTION.
function multiplier(factor){
    return function(number){
        return number*factor;
    };
}
const double=multiplier(2);
console.log(double(5));

// Built-in Function:- set Timeout, set Interval,addEventListener

setTimeout(() => {
    console.log("Delayed function");
}, 1000);