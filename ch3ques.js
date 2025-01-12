// WAP TO PRINT THE MARKS OF STUDENT IN AN OBJECT USING FOR LOOP:
// obj={riya:90,sarthak:78,tiya:66}
// obj={
//     riya:"90",
//     sarthak:"78",
//     tiya:"66",
// }
// for(let student in obj){
//     console.log(`${student}:${obj[student]}`)
// }
obj={
    riya:"90",
    sarthak:"78",
    tiya:"66",
}
for (let student in obj) {
    console.log(`${student}: ${obj[student]}`);

        
    }
