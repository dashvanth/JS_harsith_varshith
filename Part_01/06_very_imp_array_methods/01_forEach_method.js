// imp Array methods 
// forEach 

// const numbers = [2,4,6,8];

// function mulBy2(number, index){
//     console.log(`index is ${index}, number is ${number}`);
//     // console.log(`${number}*2 = ${number*2}`);
// }
// // mulBy2(numbers[0], 0);
// // mulBy2(numbers[1], 1);

// for(let i=0;i<numbers.length;i++){
//     mulBy2(numbers[i],i);
// }

// using forEach 
const numbers = [2,4,6,8];

// function myFunc(number,index){
//     console.log(`index is ${index}, numbers is ${number}`);
// }

// numbers.forEach(myFunc);

// forEach callback function 
numbers.forEach(function(number,index){
    console.log(`index is ${index}, numbers is ${number}`);  
})

numbers.forEach(function(number){
    console.log(`${number}*2 = ${number*2}`);
})

// another example 

const users = [
    {firstName:'dashvanth',age:22},
    {firstName:'ananya',age:19},
    {firstName:'priya',age:22},
    {firstName:'parth',age:20},
];

users.forEach(function(user){
    console.log(`${user.firstName}`);
})

// for of loop 
for(let user of users){
    console.log(user.firstName);
}

// arrow function 
users.forEach((user)=>{
    console.log(user.firstName);
})