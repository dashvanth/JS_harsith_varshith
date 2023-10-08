// this and window in global execution context 


console.log(this);
console.log(window);
console.log(myFunc);
console.log(fullName);


function myFunc(){
    console.log('this is my function');
}

var firstName = "dashvanth";
var lastName = "raj";
var fullName = firstName + " " + lastName;
console.log(fullName);

// console 
// global obj 
// global obj 
// function 
// undefined 
// dashvanth raj 