// are let and const are hoisted are not 

// yes they are hoisted 
// what is ReferenceError 

// GEC -> when created , the global variables and funcs are set/created 
// console.log(firstName);  unintialised
let firstName = "dashvanth";
console.log(firstName);

// this->{}
// window -> window 
// firstName->unitialised 
// firstName->dashvanth 

// Uncaught ReferenceError : firstname not initialised (when you have declared but intialised)
// Uncaught ReferenceError: first name is not defined (when you didn't created a variable)


// console.log(firstName); it will be in TDZ(temporal dead zone)
// const firstName = "dashvanth";
console.log(firstName);