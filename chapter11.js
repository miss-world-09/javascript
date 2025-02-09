// HOISTING:- 1. VARIABLE DECLARATION, 2.FUNCTION DECLARATION.

// 1.FUNCTION HOISTING:- SHIFT TO THE TOP OF THE SCOPE.

// saymyname("riya");

// function saymyname(finalname){
//     console.log(finalname);
// }

// 2. VARIABLE HOISTING:- ONLY USES VAR KEYWORD.
// console.log(age);
// var age=12;

// FUNCTION CALL:
// function greetme(greet,fullname){
//     console.log("hello",fullname);
// }
// function greet(){
//     console.log("greeting of the day");
// }
// greetme(greet,"jiya");
// greet();



// function solve(number){
//     return function(number){
//         return number*number;
//     }
// }
//  let ans = solve(5);
// console.log(ans(5));


const arr=[
    function(a,b){
        return a+b;
    },
    function(a,b){
        return a-b;
    },
    function(a,b){
        return a*b;
    },
    function(a,b){
        return a/b;
    }
];

let first=arr[2];
let ans=first(5,6);
console.log(ans);
