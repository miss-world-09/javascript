/* WRITE A FUNCTION NAMED MYTEA THAT TAKES ONE PARAMETER 'TYPE OF TEA' AND RETURN A STRING LIKE 'MAKING GREEN TEA' WHEN CALLED WITH 'GREEN TEA'. STORE THE RESULT IN VARIABLE NAMED 'TEAORDER'.*/
function mytea(typeoftea){
    return "making green tea";
}
let teaorder=mytea("lemon tea");
console.log(teaorder);

/* CREATE A FUNCTION NAMED 'ORDER TEA' THAT TAKES ONE PARAMETER 'TEATYPE'.INSIDE THIS FUNCTION CREATE ANOTHER FUNCTION NAMED 'CONFIRMORDER' THAT RETURNS MESSAGE LIKE "ORDER CONFIRMED FOR CHAI". CALL 'ORDER CONFIRMED' FROM WITHIN 'ORDER TEA' AND RETURN THE RESULT.*/
function ordertea(teatype){
    function confirmorder(){
        return "order is confirmed for chai";
    }
    return confirmorder();
}
let orderconfirmation=ordertea("chai");
console.log(orderconfirmation);

/* WRITE AN ARROW FUNCTION NAMED 'CALCULATE TOTAL' THAT TAKES TWO PARAMETER 'PRICE' AND 'QUANTITY'. THE FUNCTION SHOULD RETURN THE TOTAL COST BY MULTIPLYING THE PRICE AND QUANTITY. STORE THE VARIABLE NAMED 'TOTALCOST'.
*/
let calculatetotal=(price,quantity)=> price*quantity
let totalcost=calculatetotal(45000,5);
console.log(totalcost);

/* WRITE A FUNCTION NAME 'PROCESSTEAORDER' THAT TAKES THE ANOTHER FUNCTION 'MAKETEA' AS  A PARAMETER AND CALLS IT WITH ARGUMENT "EARL GREY". RETURN THE RESULT OF CALLING 'MAKETEA'.*/
function maketea(typeoftea){
    return `maketea:${typeoftea}`;
}
function processteaorder(teafunction){
    return teafunction("earl grey");
}
let order=processteaorder(maketea);
console.log(order);

/* WRITE A FUNCTION NAME 'CREATE TEA MAKER' THAT RETURNS ANOTHER FUNCTION. THE RETURN FUNCTION SHOULD TAKE ONE PARAMETER 'TEATYPE' AND RETURN THE MESSAGE LIKE 'MAKING GREEN TEA'. STORE THE RETURN FUNCTION IN A VARIABLE NAMED 'TEAMAKER' AND CALL IT WITH 'GREEN TEA'*/
function createteamaker(){
    return function(teatype){
        return `making ${teatype}`;
    };
}
let teamaker=createteamaker();
console.log(teamaker("green tea"));
