// function expression 

// function greeting(){
//     console.log("hello good morning");
// }

// function expression
const greeting = function(){
    console.log("hello, good morning");
}

greeting();

const sumOfTwo = function(a,b){
    console.log(a + b);
}

const ans = sumOfTwo(5,11);

const evenOdd = function(number){
    return number%2 === 0;
}
console.log(evenOdd(24));