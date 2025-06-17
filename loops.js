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


