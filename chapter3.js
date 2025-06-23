// LOOPS AND FUNCTIONS:- WE USE LOOPS TO PERFORM REPETITIVE ACTIONS
// TYPES OF LOOPS:- 1. FOR LOOP:-
// for(statement1,statement2,statement3){
//code to be executed
// }

// let a=1;
// console.log(a+1);
// console.log(a+2);
// console.log(a+3);

// for(i=1;i<40;i++){
//     console.log(a+i);
// }

let obj={
    name:"riya",
    role:"student",
    school:"ssms",
}

// let i = 0;
// while (i<60000) {
//     console.log(i)
//     i++;
// }

let i = 10;
do {
    console.log(i)
    i++;
} while (i<6);


//WRITE WHILE LOOP THAT CALCULATES SUM OF ALL NUMBERS FROM 1 TO 5 AND STORES IT IN VAR NAMED SUM.
let sum=0;
let i=0;
while(i<=5){
    sum=sum+i;
    i++;
}

// WRITE A WHILE LOOP THAT COUNTS DOWN FROM 5 TO 1 AND STORE THE NUMBERS IN AN ARRAY NAMED 'COUNTDOWN'.
let countdown=[];
let j=5;
while(j>0){
    countdown.push(j);
    j--;
}
console.log(countdown);

// WRITE A DO WHILE LOOP THAT PROMPTS A USER TO ENTER THEIR FAVOURITE TEA TYPE UNTIL THEY ENTER 'STOP'. STORE EACH TYPE IN ARRAY NAMED 'TEACOLLECTION'.
let teacollection=[];
let tea;
do{
    tea=prompt(`enter your favourite tea (type "stop" to finish)`);
    if(tea!=="stop"){
        teacollection.push(tea);
    }
} while(tea!=="stop");

// WRITE A DO WHILE LOOP THAT ADDS NO FROM 1 TO 5 AND STORES THE RESULT IN VAR NAMED "TOTAL".
let k = 1;
let total = 0;

do {
    total += k;     // total = total + k
    k++;
} while (k <= 5);

console.log("Total is: " + total);

//WRITE A FOR LOOP THAT MULTIPLIES EACH ELEMENT IN THE ARRAY [2,4,6] BY 2 AND STORES THE RESULT IN A NEW ARRAY NAMED 'MULTIPLIEDNUMBERS'.
let multipliednos=[];
let nos=[2,4,6];
for(let i=0;i<=nos.length;i++){
    let takeno=nos[i]*2;
    multipliednos.push(takeno);
}
console.log(multipliednos);


//WRITE A FOR LOOP THAT LISTS ALL CITIES IN AN ARRAY ["PARIS","NEW YORK","TOKYO","LONDON"] AND STORES EACH CITY IN AN NEW ARRAY NAMED 'CITYLIST'.
let cities=["paris","new york","tokyo","london"];
let citylist=[];
for (let c=0;c<cities.length;c++){
    const mycity=cities[c];
    citylist.push(mycity);
}
console.log(citylist);
