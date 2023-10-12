// promise.resolve 
// promise chaining 

// const myPromise = Promise.resolve(5);
//     myPromise.then(value=>{
//         console.log(value);
//     })


    // then method always return a promise

function myPromise2(){
    return new Promise((resolve,reject)=>{
        resolve("foo");
    })
}

myPromise2()
    .then(value=>{
        console.log(value);
        value += "bar";
        return value 
        return Promise.resolve(value);
    })
    .then((value)=>{
        console.log(value);
    })