// Arrow function =>() 

// normal function 
// function greeting(){
//     console.log("hello, good morning");
// }

// arrow function 
// =()=>{}

const greeting = () =>{
    console.log("hello good morning");
}
greeting();

const evenOdd = (number) =>{
    return number%2 == 0;
}

console.log(evenOdd(3));

const sumOfTwo = (a,b) =>{
    return a + b;
}

console.log(sumOfTwo(2,8));


const firstChar = (anyString) =>{
    return anyString[0];
}
console.log(firstChar("dash"));


// short arrow function 
// const oddEven = (number)=>{
//     return number%2 ===0;
// }

// minimal code 
const oddEven = (number)=>number%2 ===0;
// or 
const isEven = number=>number%2 ===0;
console.log(isEven(2), "even=true odd=false");

const sum = ()=> 10+20;
console.log(sum());

const sum2 = (a,b) => a+b;
console.log(sum2(20,80));

