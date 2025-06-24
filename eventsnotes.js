/* EVENTS IN JS:

An event is something that happens in the browser — like:
A user click
A key press
A mouse movement
A form submission
Or the page fully loading

TYPES OF EVENTS ARE:-
 Mouse Events:
click – when the mouse clicks an element
dblclick – when the mouse double-clicks
mouseover – when the mouse moves over an element
mouseout – when the mouse moves away

 Keyboard Events:
keydown – when a key is pressed down
keyup – when a key is released
keypress – when a key is pressed (older and less common now)

 Form Events:
submit – when a form is submitted
change – when the value of an input changes
input – when the user types in an input

 Document/Window Events:
load – when the entire page has loaded
resize – when the window is resized
scroll – when the user scrolls the page

Example: */
document.getElementById("btn").addEventListener("click",function(event){
    alert("button is clicked");
});

/* TIMESTAMP IN EVENTS: When an event happens, it creates an event object, which contains details about that event.
EXAMPLE:- */
document.getElementById("btn").addEventListener("click",function(event){
    console.log(event.timeStamp);
});

/* event.target:- Refers to the actual element that triggered the event (where the user clicked or interacted).
HTML:-
<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
JS:- 
document.getElementById("list").addEventListener("click", function(event) {
  console.log("target:", event.target);
});


event.currentTarget:- Refers to the element that the event handler is attached to (like list in the above example).
EXAMPLE:-
document.getElementById("list").addEventListener("click", function(event) {
  console.log("currentTarget:", event.currentTarget);
});


event.toElement:- Used in mouse events, tells which element the mouse entered.
element.onmouseout = function(event) {
  console.log("Mouse moved to:", event.toElement);
};


MOUSE EVENT PROPERTIES:-
1.clientX and clientY:- These tell you the position of the mouse pointer inside the browser window (viewport), excluding toolbars, scrollbars, etc.
EXAMPLE:- document.addEventListener("click", function(event) {
    console.log("clientX:", event.clientX);
    console.log("clientY:", event.clientY);
});

2.screenX and screenY:- These tell you the position of the mouse on the entire screen (including taskbar, browser UI).
EXAMPLE:- document.addEventListener("click", function(event) {
    console.log("screenX:", event.screenX);
    console.log("screenY:", event.screenY);
});


KEYBOARD EVENT PROPERTIES:- 
altKey, ctrlKey, shiftKey
These are boolean values:
true if the Alt / Ctrl / Shift key was pressed during the event.
false if not.
EXAMPLE:document.addEventListener("keydown", function(event) {
    console.log("Alt:", event.altKey);
    console.log("Ctrl:", event.ctrlKey);
    console.log("Shift:", event.shiftKey);
});


1.EVENT BUBBLING:- When an event happens on a child element, it "bubbles up" to its parent, then to the grandparent, and so on — all the way up to the <body>.
EXAMPLE:-
<div id="box">
  <button id="toy">Click me</button>
</div>

<script>
  document.getElementById("toy").addEventListener("click", () => {
    console.log("Button clicked");
  });

  document.getElementById("box").addEventListener("click", () => {
    console.log("Box clicked");
  });

  document.body.addEventListener("click", () => {
    console.log("Body clicked");
  });
</script>


2. EVENT DELEGATION:- Instead of adding event listeners to every child element, you put one listener on the common parent, and use it to handle events from children.
EXAMPLE:-
<ul id="teaList">
  <li class="teaItem">Green Tea</li>
  <li class="teaItem">Black Tea</li>
  <li class="teaItem">Oolong Tea</li>
</ul>

<script>
  document.getElementById("teaList")
  .addEventListener("click", function(event) {
    if (event.target && event.target.matches(".teaItem")) {
      alert("You selected " + event.target.textContent);
    }
  });
</script>


*/
