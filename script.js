let button=document.getElementById("btn")
button.style.backgroundColor=" blue";

/* .addEventListener("dblclick", ...) listens for a double-click event
When the button is double-clicked, the function inside () => {} executes
document.querySelector(".box") selects the first element with the class "box".
*/
button.addEventListener("dblclick",()=> {
    document.querySelector(".box").innerHTML="<b>yay you clicked</b>"
})

button.addEventListener("contextmenu",()=>{
alert("Don't right click")
})

/* document.addEventListener("keydown", (e) => {...})

keydown Event: This fires when any key is pressed down on the keyboard.
The event object e contains information about the key press.
console.log(e, e.key, e.keyCode);

e → Logs the entire key event object, which contains metadata (like key name, code, timestamp, etc.).
e.key → Logs the actual key name (e.g., "a", "Enter", "ArrowUp").
e.keyCode → Logs the numeric key code (e.g., 65 for "A", 13 for "Enter").*/

document.addEventListener("keydown", (e)=>{
    console.log(e, e.key, e.keyCode)
})