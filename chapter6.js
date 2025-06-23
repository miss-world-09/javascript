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


/* DECLARE AN ARRAY NAMED 'TEAFLAVOURS' THAT CONTAINS THE STRING "GREEN TEA","BLACK TEA","OOLONG TEA". ACCESS THE FIRST ELEMENT OF ARRAY AND STORE IT IN A VARIABLE NAMED 'FIRSTTEA'*/
let teaflavours=["green tea","black tea","oolong tea"];
const firsttea=teaflavours[0];
console.log(firsttea);


/* DECLARE AN ARRAY NAMED 'CITIES' CONTAINING "LONDON","TOKYO","PARIS " AND "NEW YORK", ACCESS THIRD ELEMENT IN ARRAY AND STORE IN VARIABLE NAME 'FAVOURITECITY'.
*/
let cities=["London","Tokyo","Paris","New York"];
const favouritecity=cities[3];
console.log(favouritecity);


/* YOU HAVE AN ARRAY NAMED 'TEATYPES' CONTAINING "HERBAL TEA", "WHITE TEA" AND "MASALA CHAI" CHANGE THE SECOND ELEMENT OF ARRAY TO JASMINE TEA.*/
let teatypes=["herbal tea","white tea","masala chai"];
teatypes[2]="jasmine tea";
console.log(teatypes);

/* DECLARE AN ARRAY NAMED 'CITIES VISITED' CONTAINING "MUMBAI" AND "SYDNEY" . ADD "BERLIN" TO ARRAY USING PUSH METHOD.*/
 let citiesvisited=["Mumbai","Sydney"];
 citiesvisited.push("Berlin");
 console.log(citiesvisited);

/* You have an array named 'teaOrders' with "chai","iced tea" ,"matcha tea", and "earl tea". Remove the last element of the array using the 'pop' method and store it in a variable named 'lastOrder'.
*/
let teaOrders=["chai","iced tea","matcha tea","earl tea"];
const lastorder=teaOrders[3];
teaOrders.pop(3);
console.log(teaOrders);

/* YOU HAVE AN ARRAY NAMED 'POPULARTEAS' CONTAINING "GREEN TEA","OOLONG TEA" AND "CHAI". CREATE A SOFT COPY OF THIS ARRAY NAMED 'SOFTCOPYTEAS'.*/
let popularteas=["green tea","oolong tea","chai"];
const softcopyteas=popularteas;
console.log(softcopyteas);

/* YOU HAVE AN ARRAY NAMED 'TOPCITIES' CONTAINING "BERLIN","SINGAPORE " AND "NEW YORK". CREATE A HARD COPY NAMED 'HARDCOPIEDCITIES'.*/
let topcities=["Berlin","Singapore","New York"];
let hardcopycities=[...topcities];
console.log(hardcopycities);

/*YOU HAVE TWO ARRAYS:'EUROPIANCITIES' CONTAINING "PARIS","ROME" AND "ASIANCITIES" CONATINING "TOKYO" AND "BANGKOK". MERGE TWO ARRAY TO NEW ARRAY NAMED 'WORLDCITIES'.
*/
let europiancities=["Paris","Rome"];
let asiancities=["Tokyo","Bangkok"];
let world = europiancities+asiancities;
console.log(world);
//OR
let europiancities = ["Paris", "Rome"];
let asiancities = ["Tokyo", "Bangkok"];
let worldCities = europiancities.concat(asiancities);
console.log(worldCities);

/* YOU HAVE AN ARRAY NAMED 'TEAMENU' CONTAINING "MASALA CHAI","OOLONG TEA","GREEN TEA" AND "EARL GREY". FIND THE LENGTH OF AN ARRAY AND STORE IT IN A VARIABLE NAMED 'MENULENGTH'.*/
let teamenu=["masala chai","oolong tea","green tea","earl grey"];
console.log(teamenu.length);
let menulength=teamenu.length;
console.log(menulength);


/* YOU HAVE AN ARRAY NAMED 'CITYBUCKETLIST' CONTAINING "KYOTO","LONDON","CAPE TOWN" AND "VANCOUVER". CHECK IF LONDON IS IN ARRAY AND STORE THE RESULT IN VARIABLE NAMED 'ISLONDONINLIST'*/
let citybucketlist=["Kyoto","London","Cape Town","Vancouver"];
let islondoninlist=citybucketlist.includes("London");
console.log(islondoninlist);
/*.includes() ek built-in JavaScript method hai jo check karta hai ki "London" array ke andar hai ya nahi.
Agar mil gaya, to true return karega.
Agar nahi mila, to false.*/

