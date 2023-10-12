// callback function 

function myFunc(callback){
    console.log("function is doing task1");
    callback();
}
// function myFunc2(){
//     console.log("function is doing task2");
// }
// myFunc(myFunc2);

// or 
myFunc(function(){
    console.log("function is doing task3");
})

// or 
myFunc(()=>{
    console.log("function is doing task4");
})

// another example 
function getTwoNumbers(number1,number2,onSuccess, onFailure){
    if(typeof number1  === "number" && typeof number2 === "number"){
        onSuccess(number1, number2)
    }else{
        onFailure();
    }
}
function addTwoNumbers(num1,num2){
    console.log(num1+num2);
}
// getTwoNumbers(10,20,addTwoNumbers)
// or 
// getTwoNumbers(10,20, (num1,num2)=>{
//     console.log(num1+num2);
// })

getTwoNumbers(5,20,(num1,num2)=>{
    console.log(num1+num2);
}), (num1,num2)=>{
    console.log("wrong data type");
    console.log("only number is acceptable");
}