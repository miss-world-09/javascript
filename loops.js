// WRITE A FOR LOOP THAT LOOPS THROUGH THE ARRAY ["GREEN TEA","BLACK TEA","CHAI","OOLONG TEA"] AND STOPS THE LOOP WHEN IT FINDS "CHAI". STORE ALL TEA BEFORE CHAI IN AN NEW ARRAY NAMED 'SELECTED TEA'.
let tea=["green tea","black tea","chai","oolong tea"];
let i;
let selectedtea=[];
for(i=0;i<=tea.length;i++){
    if(tea[i]==="chai"){
        break;
    }
    selectedtea.push(tea[i]);
}
console.log(selectedtea);

/* FOR-OF LOOP:- for...of loop JavaScript ka ek easy and clean way hai kisi array (ya iterable) ke elements ko ek ek karke access karne ke liye.
SYNTAX:-
for (let element of iterable) {
  // use element here
}
Don’t confuse for...of with for...in.
for...of → values deta hai
for...in → indexes/keys deta hai
*/

// USE A FOR OF LOOP TO ITERATE THROUGH ARRAY [1,2,3,4,5] AND STOP WHEN NUMBER IS 4 IS FOUND. STORE THE NUMBERS BEFORE 4 IN AN ARRAY NAMED 'SMALL NUMBERS'.
let number=[1,2,3,4,5];
let smallnumbers=[];
for(let num of number){
    if(num===4){
        break;
    }
    smallnumbers.push(num);
}
console.log(smallnumbers);

// USE A FOR OF LOOP TO ITERATE THROUGH ARRAY ["chai","green tea","black tea","herbal tea"] and skip herbal tea, store the other teas in an array named 'preferredteas'.
let tea=["chai","black tea","herbal tea","green tea"];
let preferredteas=[];
let i;
for(let t of tea){
    if(t==="herbal tea"){
        continue;
    }
    preferredteas.push(t);
}
console.log(preferredteas);



/*USE A FOR IN LOOP TO LOOP THROUGH AN OBJECT CONATAINING CITY POPULATION. STOPE THE LOOP WHEN POPULATION OF BERLIN IS FOUND AND STORE ALL PREVIOUS CITIES POPULATION IN A NEW OBJECT NAMED 'CITYPOPULATIONS'.
LET CITIESPOPULATION={
    "LONDON": 89000,
    "NEW YORK":84000,
    "PARIS":22000,
    "BERLIN":35000,
}
*/
let citiespopulation={
    "london":89000,
    "new york":84000,
    "paris":22000,
    "berlin":35000
};
let citypopulations={};
for(let city in citiespopulation){
    if(city==="berlin"){
        break;
    }
    citypopulations[city]=citiespopulation[city];
}
console.log(citypopulations);


/* USE A FOR IN LOOP TO LOOP THROUGH AN OBJECT CONTAINING CITY POPULATIONS. SKIP ANY CITY WITH POPULATION BELOW 3 MILLION AND STORE THE REST IN A NEW OBJECT NAMED 'LARGECITIES'
LET WORLDCITIES={
    "SYDNEY":50000,
    "TOKYO":90000,
    "BERLIN":35000,
    "PARIS":22000
};
*/
let worldcities={
    "Sydney":50000,
    "Tokyo":90000,
    "Berlin":35000,
    "Paris":22000
};
let largecities={};
for(let city in worldcities){
    if(worldcities[city]<30000){
        continue;
    }
    largecities[city]=worldcities[city]
}
console.log(largecities);

/* FOR EACH LOOP:- The forEach() loop is a method used to iterate over each element in an array and perform an action on them.
SYNTAX:
array.forEach(function(element, index, array) {
  // do something with element
});
element: current item in the array
index (optional): position of the item
array (optional): the whole array
EXAMPLE:- 
let fruits = ["apple", "banana", "mango"];

fruits.forEach(function(fruit) {
  console.log(fruit);
});
*/



