/* MAP:- map() is used to create new array by doing something to each element of an existing array.
Syntax:-array.map(function(currentValue, index, array) {
  // return the new value
});
Example*/
let numbers = [1, 2, 3, 4];
let doubled = numbers.map(num => num * 2);

console.log(doubled); // [2, 4, 6, 8]

// filter():- Creates a new array with only the elements that match a condition.
let nums = [1, 2, 3, 4, 5];
let even = nums.filter(n => n % 2 === 0);
console.log(even); // [2, 4]

//reduce():- Reduces all the values in the array into a single value (like a total or result).
let nums = [1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10

