/* DOM(Document object Model):- The DOM is a tree-like structure created by the browser for every webpage.
It lets JavaScript see and change HTML and CSS.
What does DOM do? => Change text,html,style,add remove elements,handle click and inputs,dynamically ipdate the page.
EXAMPLE:-
HTML:- <h1>hello</h1>
JS:- document.queryselector("hi").innertext="hi there"

BOM:- Browser Object Model:- Things JavaScript can do outside the page — like the browser window, alerts, URL, and timers.
DOM is about page content
BOM is about browser features
*/


document.addEventListener("DOMContentLoaded", function () {
    // alert("connected");

    // Your other DOM-manipulating code here
});

document.getElementById("changetextbutton").
addEventListener('click',function(){
    console.log(this);
})

document.getElementById("changetextbutton")
.addEventListener("click",function(){
    let paragraph=document.getElementById("myParagraph");
    paragraph.textContent="the paragraph is changed";
});

document.getElementById("highlightfirstcity")
.addEventListener("click",function(){
    let citiesList=document.getElementById("citiesList");
    citiesList.firstElementChild.classList.add("highlight");
    // console.log(citiesList.firstElementChild.classList.add("highlight"));
});

document.getElementById("changeOrder")
.addEventListener("click",function(){
    let coffeeType=document.getElementById("coffeeType");
    coffeeType.textContent="expresso";
    coffeeType.style.backgroundColor="brown";
    coffeeType.style.padding="5px";
})

document.getElementById("addNewItem")
.addEventListener("click",function(){
    let newItem=document.createElement("li");
    newItem.textContent="Eggs";
    document.getElementById("shoppingList").appendChild(newItem);
})

document.getElementById("clickMeButton")
.addEventListener("dblclick",function(){
alert("db click is working");
})

document.getElementById("teaList")
.addEventListener("click",function(event){
if(event.target&& event.target.matches(".teaItem")){
    alert("you selected"+event.target.textContent);
}
});

document.getElementById("feedbackForm")
.addEventListener("submit",function(event){
    event.preventDefault();
    let feedback=document.getElementById("feedbackInput").value;
    console.log(feedback);
    document.getElementById(
        "feedbackDisplay"
    ).textContent=`feedback is ${feedback}`;

});

document.addEventListener("domContentLoaded",function()
{
    document.getElementById("domStatus").textContent="dom fully loaded";
});

document.getElementById("toggleHighlight")
.addEventListener("click",function(){
    let descriptionText=document.getElementById("descriptionText");
    descriptionText.classList.toggle("highlight");
})