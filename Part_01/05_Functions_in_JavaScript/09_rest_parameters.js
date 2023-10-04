// rest parameters 

function addNumbers(a,b,...c){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(` c is an array because rest parameter ${c}`);
    console.log("c is", c);
}
// addNumbers(1,2,3,4,5,6,7); invalid
// using rest parameters 
addNumbers(1,2,3,4,5,6,7);

function addAll (...numbers){
    let total = 0;
    for(let number of numbers){
        total = total + number;
    }
    return total;
}

const ans = addAll(1,2,3,4,5);
console.log(ans);