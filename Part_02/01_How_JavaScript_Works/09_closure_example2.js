// closure example 2 

function myFunction(power){
    return function(number){
        return number ** power;
    }
}

const cube = myFunction(4);
const ans = cube(2);
console.log(ans);

// arrow function 
function myFunction(power){
    return (number) => number ** power;
}
// arrow function more concise
const myFunction = power=> number => number ** power;
