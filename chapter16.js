/* ASYNCHRONOUS ACTIONS:- ACTIONS THAT WE INITIATE NOW AND FINISH LATER. EX: TIME OUT.

CALLBACK FUNCTIONS:-A FUNCTION PASSED TO ANOTHER FUNCTION AS AN ARGUMENT WHICH THEN INVOKED INSIDE THE OUTSIDE FUNCTION TO COMPLETE AN ACTION.

EX:- */
// function loadScript(src,CALLBACK){
//     let script=document.createElement('script')
//     script.src=src
//     script.onload=()=>CALLBACK(script)
//     document.head.append(script)
// } 

// setTimeout(()=>{
//     console.log("I am inside timeout")
// },0);
// setTimeout(()=>{
//     console.log("I am inside timeout2")
// },500);
// console.log("the end")
/*console.log("the end") — Sabse pehle yeh execute hua kyunki yeh synchronous code hai.

 setTimeout() with 0ms delay — Event Loop pehle synchronous code ko complete karta hai, phir setTimeout ka callback queue mein daal kar run karta hai.

 setTimeout() with 500ms delay — Yeh callback 500ms ke baad execute hota hai, magar us time tak baaki synchronous aur pending callbacks complete ho chuke hote hain.*/

//  Yeh ek simple function hai jo sirf "Nothing" ko console pe print karega
 const fn=()=>{
    console.log("Nothing")
 }

//  Yeh function 2 parameters leta hai:
//  arg → Jo value pass hogi usko console mein print karega.
//  fn → Ek function ko accept karta hai aur us function ko execute karega.
 const callback=(arg,fn)=>{
    console.log(arg)
    fn()
 }

 const loadScript=(src,callback)=>{
    let  sc=document.createElement("script");  /*Yeh line ek <script> tag dynamically create karti hai jo humare HTML document mein inject hoga.*/
    sc.src=src; /*Ismein src ka URL diya jata hai jo JavaScript file ka path hota hai (e.g., "example.js").*/
    sc.onload = () => callback("maya", fn); /*Ab callback sirf tab chalega jab script successfully load ho chuki ho.*/
    document.head.append(sc) /*Yeh line <head> tag ke andar newly created <script> tag ko insert karti hai, jo external JavaScript file ko load karne ka kaam karegi.*/
 }

//  HANDLING ERROR:- WE CAN HANDLE CALLBACK ERRORS BY SUPPLYING ERROR ARGUMENT LIKE:
function loadScript(src,callback){
    
}