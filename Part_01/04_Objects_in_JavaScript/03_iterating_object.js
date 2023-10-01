// iterating object 

// for in loop 
// Object.keys

let movie = {
    name : "harryPotter", 
    characters: ["harrypotter", "hermoine", "ronWeasely"],
    firtsRelease : 2001
};

// for in loop 
for(let moviedetails in movie){
    // console.log(movie.key); undefined
    // console.log(movie[moviedetails]); to access keyvalues
    console.log(`${moviedetails } : ${movie[moviedetails]}`);
}

// object keys 

// console.log(typeof Object.keys(movie));// gives array 
const val = Array.isArray(Object.keys(movie));
console.log(val);

// for of loop  
for(let key of Object.keys(movie)){
    console.log(`${key} : ${movie[key]}`);
}