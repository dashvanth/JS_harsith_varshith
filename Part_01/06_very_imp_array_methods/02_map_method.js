// map method ->creates a new array and stores it. return keyword is must when you use map.

const numbers = [2,4,6,8,10];

// const square = function(number){
//     return number*number;
// }

// const squareNumber = numbers.map(square);
// console.log(squareNumber);

// using function return func 
const squareNumber = numbers.map(function(number,index){
    return `index: ${index}, square: ${number * number}`;     
});
console.log(squareNumber);


// real world example 

const users = [
    {firstName:'dashvanth',age:22},
    {firstName:'ananya',age:19},
    {firstName:'priya',age:22},
    {firstName:'parth',age:20},
];


// function firstName(user){
//     return user.firstName;
// }

const userFirstName = users.map((user)=>{
    return user.firstName;
});
console.log(userFirstName);