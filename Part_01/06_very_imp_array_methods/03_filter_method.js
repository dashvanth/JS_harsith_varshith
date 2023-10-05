// filter method -> only give boolean values true or false. used to apply filters like odd even, small large etc 

const numbers = [1,2,3,4,5,6];

// const isEven = function(number){
//     return number%2===0;
// }

// const evenNumbers = numbers.filter(isEven);
const evenNumbers = numbers.filter((number)=>{
    return number % 2 === 0;
});
console.log(evenNumbers);