// trim()
// toUpperCase() 
// toLowerCase()
// slice

// strings are immutable so they give another string when performed in methods 

// trim() -> used to remove start and end whiteSpaces not mid 
let favMovie = "      harryPotter       ";

console.log(favMovie.trim());

favMovie = "into     The Wild";
let trim2 = favMovie.trim();
console.log(trim2);



// toUpperCase() -> used to convert characters into uppercase 
let favShow = "theBigBangTheory";
let uppercase = favShow.toUpperCase()
console.log(uppercase);

// toLowerCase() -> used to convert characters into lowercase 
favShow = "FRIENDS"
console.log(favShow.toLowerCase());

// slice() -> used to remove or delete the particular string / characters 
let favSuperHero = "spiderMan";
let sliced = favSuperHero.slice(2,5);
console.log(sliced);
