// ERROR HANDLING:
/* WE ALL MAKE MISTAKES. ALSO SOMETIMES OUR SCRIPT HAVE SOME ERROR. USUALLY A PROGRAM HALTS WHEN THERE IS ERROR.
THE TRY-CATCH SYNTAX ALLOWS US TO CATCH ERRORS SO THAT THE SCRIPT INSTEAD OF DYING CAN DO SOMETHING MORE REASONABLE.
THE TRY-CATCH SYNTAX:
try{
try the code
} catch(err){
error handling 
}
it works like first the code in try will execute if there is no errror catch is ignored else catch is execute.
TRY-CATCH WORK SYNCHRONOUSLY->IF EXCEPTION HAPPENS IN SCHEDULED CODE LIKE IN setTimeout,Then,try...catch WO'NT CATCH IT:
try{
setTimeout(function(){
error code ->script dies and catch does not work
})
catch....
}
THAT'S BECAUSE THE FUNCTION IS ITSELF EXECUTED LATER, WHEN ENGINE HAS ALREADY LEFT THE TRY-CATCH CONSTRUCT.

THROWING CUSTOM ERROR:
WE CAN THROW OUR OWN ERROR USING THE THROW SYNTAX:
*/
if(age>18){
    throw new error("INVALID AGE");
    
}
// WE CAN ALSO THROW THE PARTICULAR ERROR USING THE BUILD IN FUNCTION FOR STANDARD ERRORS:
// let error=new syntax error("message")
// // OR
// let error=new ReferenceError("message") 