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


