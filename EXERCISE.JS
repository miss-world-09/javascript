/* CREATE A FAULTY CALCULATOR  USING JS. THIS CALCULATOR DO THE FOLLOWING:-
1. IT TAKES TWO NUMBERS AS INPUT FROM THE USER.
2. IT PERFORMS WRONG OPERATIONS AS FOLLOWS:-
+ ---> -
- ---> /
* ---> +
/ ---> * 
*/
let a=number(prompt("ENTER YOUR NUMBER 1"));
let b=number(prompt("ENTER YOUR NUMBER 2"));
let random=Math.random();
let addition=a+b;
let subtraction=a-b;
let multiplication=a*b;
let division=a/b;
if (random<0.1){
    console.log("ADDITION:",a-b);
    console.log("SUBTRACTION:",a/b);
    console.log("MULTIPLICATION:",a+b);
    console.log("DIVISION:",a*b);

}
else{
    console.log("ADDITION:",a+b);
    console.log("MULTIPLICATION:",a*b);
    console.log("DIVISION:",a/b);
    console.log("SUBTRACTION:",a-b);

}




