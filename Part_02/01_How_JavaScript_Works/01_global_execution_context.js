// compilation 
// code execution

// why compilation ->1. early error checking. 2. determinig appropriate scope of variables

// javascript first compiles then executes 
// how js code executes 

// what is global execution context 
// 1. creation phase 
// firstName: undefined , this -> window obj , window = {}

// 2. code execution phase -> this ->window, window->window, firstName-> undefined, firstName->"dashvanth"

// javascript is a synchoronous programming language ->line by line executio takes place 
// what is local execution context 
// closures 
console.log(this);
console.log(window);
console.log(firstName);
var firstName = "dashvanth";
console.log(firstName);