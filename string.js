/* STRING:-A string in JavaScript is a sequence of characters used to represent text. It can contain letters, numbers, symbols, or spaces.

String Methods are:- 
length:-Returns length of the string
charAt(index):- Returns character at a specific index
toUpperCase():-	Converts to uppercase
toLowerCase():-	Converts to lowercase
slice(start, end)	:-Extracts part of the string
substring(start, end):-	Similar to slice but doesn't support negative indices
replace(old, new):-	Replaces text
includes(substring):-	Checks if string contains substring
split(separator):-	Splits string into array
trim():-	Removes whitespace from both ends
indexOf() / lastIndexOf():-	Finds position of substring
EXAMPLE:- */

let greeting="hello,world";
console.log(greeting.length);
console.log(greeting.charAt(3));
console.log(greeting.toUpperCase());
console.log(greeting.toLowerCase());
console.log(greeting.slice(0,3));
console.log(greeting.replace("hello","disha"));

/* Slice():- Returns a shallow copy of a portion of an array.
Does NOT modify the original array.
Synatx:- array.slice(start, end);

Splice():- Can add, remove, or replace elements.
Changes the original array.
Synatx:- array.splice(start, deleteCount, item1, item2, ...);
*/

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'))
console.log(url.includes('sundar'))
