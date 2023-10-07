// this keyword and window object 

console.log(this); //refers to window object
// window Object container many methods(func inside Object)
console.log(window); //clg(this) same


// this === window -> same

function myFunc(){
    console.log(this);
}
myFunc(); //gives window object because window object container this function(which is called as method)
window.myFunc(); //same

// *use strict; for this keyword window object not appear
// then error 
// else 
// not error 
