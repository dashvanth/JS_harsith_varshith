// setTimeout with 0 milisecond 
// the for loop stops the settimout to execute until it completes looping 
// console.log("script is started");

// setTimeout(()=>console.log("inside set timeout 1 ms"), 0);
// for(let i=0;i<100;i++){
//     console.log("...");
// }
// console.log("script is end");


// setTimeout provides id 

// console.log("script is started");

// const id = setTimeout(()=>console.log(" set timeout id", id), 1000);
// for(let i=0;i<100;i++){
//     console.log("...");
// }
// console.log("setTimeout id is : ", id);
// console.log("script is end");

// using clearTimeout 
// clearTimeout->used to stop the setTimeout 
console.log("script is started");

const id1 = setTimeout(()=>console.log(" set timeout id", id1), 1000);
for(let i=0;i<100;i++){
    console.log("...");
}
console.log("setTimeout id is : ", id1);
console.log("clearing setTimeout");
clearTimeout(id1);
console.log("script is end");