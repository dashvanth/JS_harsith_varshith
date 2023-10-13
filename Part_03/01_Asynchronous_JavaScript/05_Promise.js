// promise
console.log("script starts");
const bucket = ["coffee", "chips", "vegetables", "rice", "salt"];

// creating promise 
const friedRicePromise = new Promise((resolve,reject)=>{
    if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
        resolve("Fried Rice");
    }else{
        reject(new Error("something is missing"))
        reject("couldn't do it");
    }
})

console.log(friedRicePromise);

// produce 

// consume 
// how to consume 
friedRicePromise.then((myfriedRice)=>{
    // when promise is resolved 
    console.log("let's eat", myfriedRice);
},
// when Promise is rejected 
 (error)=>{
    console.log(error);
})

setTimeout(() => {
    console.log("hello from settimeout");
    
}, 0);

for(let i =0;i<=100;i++){
    console.log(Math.random());
}
console.log("script ends");