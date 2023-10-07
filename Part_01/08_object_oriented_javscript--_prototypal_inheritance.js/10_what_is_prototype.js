// what is prototype ->property comes in functions provides free space {} and can use it to add key value pairs

// javascript function is function and also a object 
// we can treat function as an Object also     
// javascript function ===> function + Object 

function hello(){
    console.log("hello world");
}

// name prorperty -> gives name of the func
console.log(hello.name);


// you can add you own property like name, etcc
// using .
hello.myOwnProperty = "very unique value";
console.log(hello.myOwnProperty);
// hello();
// name -> tells function name 

// func provides more useful properties 

// func provides free space means -> {}

console.log(hello.prototype);

// only functions provide prototype property 
if(hello.prototype){
    console.log("prototype is present");
}else{
    console.log("prototype is not present");
}


// use 
hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.myArray = ["value1","value2"];
hello.prototype.sing = function(){
    return "lalala"
} ;
console.log(hello.prototype);