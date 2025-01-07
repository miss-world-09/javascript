// USE LOGICAL OPERATOR TO FIND WHETHER THE AGE OF A PERSON LIES BETWEEN 10 AND 20?
 age=4;
 if(age>10 && age<20){
     console.log("YES THE AGE OF PERSON LIES BETWEEN 10 AND 20")
 }
 else{
     console.log("NO,THE AGE OF PERSON DOES NOT LIE BETWEEN 10 AND 20")
 }

// DEMONSTARATE THE USE OF SWITCH STATEMENT IN JS.

 let age = 18;

switch (age) {
    case 18:
         console.log("YOU CAN VOTE");
         break;
     case 17: 
        console.log("YOU ARE AN UNDERAGE");
         break;
     default:
         console.log("INVALID AGE!");
        break;
 }

// WAP TO FIND WHETHER A NUMBER IS DIVISIBLE BY 2 AND 3.
let num=60;
if(num%2==0 && num %3==0){
    console.log("THE NUMBER IS DIVISIBLE BY 2 AND 3")
}
else{
    console.log("NUMBER IS NOT DIVISIBLE BY 2 AND 3")
 }

// WAP TO FIND OUT WHETHER A NUMBER EITHER DIVIBLE BY 2 or 3.
let num=90;
 if(num %2==0 && num%3==0){
    console.log("NUMBER IS DIVISIBLE BY BOTH")
}
else if(num %2==0 ){     
    console.log("THE NUMBER IS DIVISIBLE BY 2")
}
else if(num %3==0){
    console.log("THE NUMBER IS DIVISIBLE BY 3")
}
else{
    console.log("THE NUMBER IS NOT DIVISIBLE BY EITHER 2 OR 3")
}

// PRINT "YOU CAN DRIVE" OR "YOU CANNOT DRIVE" BASED ON AGE GREATER THAN 18 USING TERNARY OPERATOR.
let age = 20; 

let message = (age > 18) ? "YOU CAN DRIVE" : "YOU CANNOT DRIVE";
console.log(message);

