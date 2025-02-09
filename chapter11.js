// LOOPS:-
// 1. FOR EACH LOOP:- WE CAN ACCESS EACH AND EVERY ELEMENT.
// let arr=[1,3,2,6,7,3];
// arr.forEach((value,index)=> {
//     console.log("number",value,"index",index);
// });
// TRADITIONAL LOOP
// for(let value of arr){
//     console.log(value);
// }

// ARRAY WITH FUNCTION:
let arr=[1,3,5,7,3];
function getsum(arr){
    let sum=0;
    arr.forEach((value)=> {
        sum=sum+value;
    });
    return sum;
}
let totalsum=getsum(arr);
console.log(totalsum);

