// ARRAY METHODS IN JS:-
toString() /*converts an array to a string of comma separated values*/
join() /*join all the array elements using a separator*/
Pop()  /*removes the last element from the array*/
Push()  /*adds a new element at the end of the array*/
shift() /*removes first element and returns it*/
unshift() /*adds element to the beginning return new array length*/
delete  /* array element can be delete using delete operator*/
Concat ()/*used to join array of the given array*/
let a1=[1,2,3]
let a2=[5,6,7]
let a3=[3,6,5]
a1.concat(a2,a3)

sort() /*used to sort an array alphabetically*/

splice() /*used to add new items to an array*/
const numbers=[1,2,3,4]
numbers.splice(2,1,22,44,22) /* 1-> no of elements to remove,
2->position to add,
22,44,22->elements to be added*/

slice() /*slice out the piece from an array it creates  a new array*/
const num=[1,2,3,4]
num.slice(2) /*[3,4]*/
num.slice[1,3] /*[2,3]*/
 
reverse () /*reverses the element in the source array*/

// LOOPING THROUGH ARRAYS:-
// let a=[2,6,5,4,6]
// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element)
// }

a.forEach((value,index,arr) => {
    console.log(value,index,arr)
});

for(const key in Object){
    if(Object.hasOwnproperty.call(Object,key)){
        const element=Object[key];
    }
}

// for each loop:- calls a function once for each array element
// map():- creates a new array by performing operations on each element of array
// fillter():- filters an array with values that passes a test. Creates a new array
// reduced method:- reduces an array for the single value
// array from:- used to create an array from any other object.

