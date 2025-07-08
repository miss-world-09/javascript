/* CHAPTER 1:- VARIABLES AND DATA

 WHAT ARE VARIABLES?
 ANS:- A VARIABLE IS A CONTAINER THAT STORES A VALUE. THE VALUE OF JS VARIABLE CAN BE CHANGES DURING EXECUTION OF PROGRAM.
 var a=5
 let a=6 both are correct

RULES FOR CHOOSING VARIBLES:-
1. LETTERS,DIGITS,UNDERSCORES,$ IS ALLOWED
2. MUST BEGIN WITH $,_, AND A LETTER.
3. JS RESERVED WORDS CONNOT BE USED AS VARIABLE NAME.
4. Disha and dISha are different variables.

VAR VS LET IN JS:
1. VAR IS GLOBALLY SCOPED WHILE LET IS IS BLOCK SCOPED.
2. VAR CAN BE UPDATED AND RE-DECLARED WITHIN THE SCOPE.
3. COST AND LET CAN NEITHER BE UPDATED NOR RE-DECLARED.
PRIMITIVE DATA TYPES:- SET OF BASIC DATA TYPES IN JS. THERE ARE 7 PRIMITIVE DATA TYPES:-
NULL,NUMBER,STRING,SYMBOL,UNDEFINED,BOOLEAN,BIG INT.
NULL MEANS IT IS EMPTY, NOTHING IS INSIDE IT. WHEREAS UNDEFINED STANDS FOR NOT DEFINED MAY BE IT IS DEFINED IN FUTURE.
OBJECT:-  */
const item={
    name:"led bulb",
    price:"150"
}
// name and price are key whereas led bulb and 150 are values

/* let gameName="spiderman";
gameName="batsman";
console.log(gameName);
output: batsman (variable can be changed)

const userName="riya";
userName="rama"
conlose.log(userName);
OUTPUT:- ERROR (because const can't be changes)*/

// Q1:- CREATE A VARIBLE OF TYPE STRING AND TRY TO ADD A NUMBER IN IT.
// let string="10";
// let result= string-4;
// console.log(result);

// Q2:- use the type of operator to find the datatype of the string in the last ques.
let string="10";
let result= string-4;
console.log(result);
console.log(typeof result);

// Q3:- CREATE A CONST OBJECT IN JS. CAN YOU CHANGE IT TO HOLD A NUMBER LATER?
const Obj = {
    name: "John",
    age: 30
};

/* Primitive data types:- These are basic data types that store single values.
ex:-Number,string,boolean,undefined,null,bigInt,symbol.

 NON-PRIMITIVE DATA TYPES:- WE HAVE MAKE THE OBJECTSAND THIS IS HOW IT CAN BE ACCESSED.
EX:- object,array,function,date,map,set etc. */

const username={
    firstname:"mr h",
    isloggedin:"true",
    isdrunk:"true",
    
};
username.lastname="sharma";
console.log(username.firstname);
console.log(username.lastname);
console.log(username.isdrunk);
console.log(typeof username);

let today=new Date();
console.log(today);

