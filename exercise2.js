/*The function generates a random number between 1 and 7000 milliseconds (7 seconds).
This random delay is used in the next functions to simulate unpredictable hacking steps.
*/

function getRandomNumber() {
    return Math.floor(Math.random() * 7000) + 1;
}
function getRandomNumber2() {
    return Math.floor(Math.random() * 7000) + 1;
}
function getRandomNumber3() {
    return Math.floor(Math.random() * 7000) + 1;
}
/*async → Marks the function as asynchronous.
Promise → Wraps the code to simulate an asynchronous task.
setTimeout() → Delays the resolution of the promise using the random number.
resolve() → After the delay, it resolves with the message "Initializing Hacking".*/
async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Initializing Hacking')
        }, getRandomNumber())
    })
}

async function getData2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Initializing Hacking')
        }, getRandomNumber2())
    })
}

async function getData3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Initializing Hacking')
        }, getRandomNumber3())
    })
}

async function main() {
    const con = document.querySelector(".container")
/*await → Pauses the code execution until getData() finishes.
.then() → After getData() resolves, it appends the message "Initializing Hacking..." to the container.
The <span> elements are styled with the .loading animation to create a dot-loading effect.*/
    await getData().then(() => {
        con.innerHTML += `Initializing Hacking <span class="loading">
            <span></span>
            <span></span>
            <span></span>
        </span>` + "<br>";
    })

    await getData2().then(() => {
        con.innerHTML += `Reading your files <span class="loading">
            <span></span>
            <span></span>
            <span></span>
        </span>` + "<br>";
    })

    await getData3().then(() => {
        con.innerHTML += `Password files Detected <span class="loading">
            <span></span>
            <span></span>
            <span></span>
        </span>` + "<br>";
    })
    
}

main();