// var greet;
// console.log(greet);

// var greet =function(){
//     console.log("hello");

// }

// let obj={
//     age:22,
//     wt:55,
//     ht:6,
//     greet: ()=>{
//       console.log("hello Dunia");
//      }
// }

class human{
    age=13;  //public
    #wt=67;  //private
    ht=170;

    // CONSTRUCTORS:-
    constructor(newage,newheight){
        this.age=newage;
        this.height=newheight;
    }

    // BEHAVIOUR
    walking(){
        console.log("I am walking",this.#wt);
    }
    running(){
        console.log("I am running ");
    }
    get fetchweight(){
        return this.#wt;
    }
    set modifyweight(val){
        this.#wt=val;
    }
}

let obj=new human(50,200e);
// console.log(obj.#wt);
obj.walking();
//Getter and setter:- getter is used to get the value of the function.
// whereas setter is used to set the value of the function.
console.log(obj.fetchweight);