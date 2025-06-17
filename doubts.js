// WRITE A FOR LOOP THAT LOOPS THROUGH ARRAY ["LONDON","NEW YORK","PARIS","BERLIN"] AND SKIPS "PARIS". STORES OTHER CITIES IN NEW ARRAY NAMED "VISITED CITIES".

let cities = ["LONDON", "NEW YORK", "PARIS", "BERLIN"];
let visitedcities = [];

for (let i = 0; i < cities.length; i++) {
    if (cities[i] === "PARIS") {
        continue; 
    }
    visitedcities.push(cities[i]);
}

console.log(visitedcities);
