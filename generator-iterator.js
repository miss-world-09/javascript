/* ITERATOR:- An iterator is something that gives you one value at a time, like a machine that hands you one cookie at a time from a jar.
EXAMPLE:- */

const arr=[10,20,30];
const iterator=arr[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

/* It gives you an object with two keys:
1. value:
This is the next item from the array.
2. done:
This tells you:
false → more values are still left
true → nothing is left to give (the robot is done!)
*/

/*
GENERATOR:- A generator is a special type of function that can pause and resume using the yield keyword.
It automatically creates an iterator for you!

Iterator: Like flipping pages of a book one by one with .next().
Generator: Like an audiobook that says "press play to continue" — and resumes where it left off.

EXAMPLE:-  
function* defines a generator.
yield is like a pause and return command.
*/
function* myGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = myGenerator();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }

