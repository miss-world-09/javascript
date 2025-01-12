 //FUNCTIONS IN JAVASCRIPT:-
 function girl(name){
     console.log("hi"+name+"we will meet tommorow")
 }
 girl("riya")

function sum(a,b,c=9){
    console.log(a,b,c)
    return a+b+c
}
result1=sum(3,5)
result2=sum(3,5,7)
console.log("the sum of these number is",result1)
console.log("the sum of these number is",result2)

const func1=(x)=>{
    console.log("the sum of these numbers is",result1)
    console.log("the sum of these numbers is",result2)
}
func1(45);
func1(60);
