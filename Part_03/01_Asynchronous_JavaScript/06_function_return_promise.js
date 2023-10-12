// function return promise 

function ricePromise(){
    const bucket = ["coffee", "chips", "vegetables",  "rice","salt"];
    return new Promise((resolve,reject)=>{
        if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
            resolve("Fried Rice");
        }else{
            
            reject("couldn't do it");
        }
    })
}

ricePromise().then((myfriedRice)=>{
    // when promise is resolved 
    console.log("let's eat", myfriedRice);
},
// when Promise is rejected 
 (error)=>{
    console.log(error);
})