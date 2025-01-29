// STRINGS:- STRINGS ARE USED TO STORE AND MANIPULATE TEXT . SYNTAX:-
// let name="tiya" 
//   OR
// let name='maya'
// name.length allows us to print the length of the string.

// TEMPLATE LITERALS:- USE BACKTICS INSTEAD OF QUOTE TO DEFINE A STRING.
// let name='riya'
// withtemplate literals it is possible to use both single as well as double quote inside a string.
let sentence='this is maya "riys" '
console.log(sentence);

// we can insert variable directly into template literals. This is called string interpolation.
let real_name = "maya"
let friend = "rima"
console.log("His name is " + real_name + " and his friends name is " + friend)
console.log(`His name is ${real_name} and his friends name is ${friend}`)

// FOR ACCESSING STRINGS
let a="disha";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a.length)

// ESCAPE SEQUENCE:- we can use single quote escape sequence.
// 1. \:- inside a string with double quotes
// 2. \n:- for new line
// 3. \t:- tab
// 4. \r:- carriage return

// STRING PROPERTIES AND METHODS:-
let b="kaya"
console.log(b.toUpperCase())
console.log(b.toLowerCase())
console.log(b.length)
console.log(b.slice(1,3))
console.log(b.replace("ay","ak"))
