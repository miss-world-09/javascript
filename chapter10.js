// let obj={
//     name:"riya",
//     height: 6,
//     weight: 55,
//     greet: function(){
//         console.log("hello!");
//     }
// };
// console.log(obj)
// obj.greet();

// ARRAY CRAETION:-
// creating array of numbers:
const number=[1,2,3,4,5];
// creating array of strings:
const fruits=['apple','banana','orange'];
// creating array of mixed data type:
const mixed=[1,'apple',{name:'riya'}];

// ARRAY CONSTRUCTOR:- 
// creating an array of numbers using array constructor
const numbers= new Array(1,2,3,3,4,0);
// creating array of strings using array constructor:
const fruitss=new Array('apple','banana','orange');
// creating an empty array using array constructor:
const emptyarray=new Array();

console.log(numbers);
console.log(fruitss);
console.log(emptyarray);
console.log(fruitss[0]);
console.log(fruitss[fruitss.length-1]);
const index=1;
console.log(fruitss[index]);

// INSERTION IN ARRAY:- 
// 1. INSERTION AT END:-
const color=["orange","pink","blue"];
color.push('green');
console.log(color);

// 2. INSERTION AT START:-
const colors=["orange","pink","blue"];
colors.unshift("red");
console.log(colors);

// 3. INSERTION AT RANDOM INDEX":-

// array.splice(startIndex, deleteCount, item1, item2);

const fruiitss = ['apple', 'orange'];

// Inserting 'banana' at index 1
fruiitss.splice(1, 0, 'banana');
console.log(fruiitss); 