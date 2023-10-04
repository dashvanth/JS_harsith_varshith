// Block Scope vs function scope

// let and const are Block scope 
// var is function scope 

// let and const variable 
{
    let firstName = "dashvanth";
    console.log(firstName); //can acces only inside block
}
    // console.log(greet); //can't access outside the block 


let firstName = "suguna";
console.log(firstName);


// var variable 
{
    var fullName = "priyalokesh";
    console.log(fullName);
}
console.log(fullName);


if(true){
    let favSuperhero = "batman";
    var favSuperhero2 = "loki";
    console.log(favSuperhero);
}
// console.log(favSuperhero); can't access 
console.log(favSuperhero2);


// another example 
let lastName = "kushi";
function myapp(){
    if(true){
        let lastName = "karunya";
        console.log(lastName);
    }
    console.log(lastName); //error: can access outside variable
}
myapp();