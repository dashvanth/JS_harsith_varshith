// setTimeout ->it is used to set a time for particular code to execute after some time.this shows js asynchronous behaviour

console.log("script start");
// function hello(){
//     console.log("hello world");
// }
setTimeout(()=>console.log("inside set timeout 1s"), 1000);

console.log("script end");
