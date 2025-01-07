// EXPRESSION AND CONDITIONAL:-

// OPERATORS IN JS:-
// 1. ARITHMETIC OPERATORS:- EXAMPLE:
// +,-,/,%,**  EXPONENTIATION,++ INCREMENT, -- DECREMENT

// 2. ASSIGNMENT OPERATOR:- EX:
// =  (X=Y), +=(X=X+Y), -=(X=X-Y), *=(X=X*Y), /=(X=X/Y), %=(X=X%Y), **=(X=X**Y)

// 3.COMPARISON OPERATORS:- EX:
// ==->EQUALS TO, != ->NOT EQUALS TO, === ->EQUAL VALUE AND TYPE
// !== ->NOT EQUAL VALUE OR TYPE, > ->GREATER THAN, < ->LESS THAN
// >= ->GREATER THAN OR EQUAL TO, <= ->LESS THAN OR EQUAL TO, ?->TERNARY OPERATOR

// 4. LOGICAL OPERATORS:- EX:
// &&->LOGICAL AND, ||->LOGICAL OR, !->LOGICAL NOT
// CONDITIONAL STATEMENTS:- IF,IF-ELSE,IF-IF ELSE-ELSE STATEMENT
age=18
if(age>0){
    console.log("A valid age")
}
else if(age>10 && age<15){
    console.log("but you are a kid")
}
else if(age>18){
    console.log("not a kid")
}
else{
    console.log("Invalid age")
}

// TERNARY OPERATOR:- EVALUATES A CONDITION AND EXECUTES A BLOCK OF CODE BASED ON THE CONDITION
// SYNATX:- CONDITION?EXP1:EXP2
a=6
b=5
let c=a>b?(a-b):(b-a);