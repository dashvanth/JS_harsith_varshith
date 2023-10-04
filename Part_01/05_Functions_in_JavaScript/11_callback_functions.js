// callback functions -> taking input as function in another func call and calling it

function myFunc2(){
    console.log("inside myFunc2");
}
// callback ->we usually call it callback when we pass a function in another func call 
function myFunc(callback){
    // console.log(a);
    console.log("i am myFunc.");
    callback();
}
myFunc(myFunc2); //passing another func in myFunc call



function firstName(firstName){
    console.log(`first name is ${firstName}`);
}
function personDetails(Name){
    console.log("person details:");
    Name("dashvanth");
}

personDetails(firstName);