/*async ka use karke aap kisi function ko asynchronous bana dete hain.
Asynchronous function hamesha ek promise return karta hai — chahe aap explicitly Promise likhein ya na likhein
return new Promise()
Yaha pe aapne manually ek promise banaya hai.
Promise ka constructor (new Promise()) do arguments leta hai:
resolve — Jab kaam successfully ho jaye.
reject — Jab kaam fail ho jaye (error aa jaye).
setTimeout()
setTimeout() ka use karke delay introduce kiya gaya hai.
Yaha 3.5 seconds (3500ms) ka delay hai.
resolve(455)
3.5 seconds ke baad resolve() call hoga aur value 455 return hogi.
resolve ka use hota hai promise fulfill karne ke liye.
Why async + Promise Together?
async ka use karne se aapko await keyword ka benefit milta hai, jo asynchronous code ko synchronous-style mein likhne mein madad karta hai.

async function getData(){
    return new promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(455)
        },3500);
    })
}

settle means resolve or reject
resolve means promise has setlled successfully 
reject means promise has not settled successfully
*/
async function getData(){
    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
let data = await x.json() 
return data

}
async function main(){
    console.log("loading modules")
    console.log("do something else")
    console.log("load data")
    let data=await getData()
    console.log(data)
    console.log("process data")
    console.log("process data")
    console.log("task2")
}
main()


/*getData() Function
This function fetches data from an API using the fetch() method.
await ka use kiya gaya hai jo ensure karta hai ki fetch() ka response milne tak agla code execute na ho.
x.json() bhi ek asynchronous operation hai, isliye uspe bhi await ka use kiya gaya hai.
Yeh function Promise return karega jo JSON data ko hold karega.
await getData() ka use hone ki wajah se "process data" ya "task2" tab tak execute nahi hoga jab tak getData() se data return na ho jaye.
main() function call hone ke baad steps sequentially execute honge.
await ka kaam hai JavaScript ko temporarily stop karna jab tak async function complete na ho jaye.
*/
