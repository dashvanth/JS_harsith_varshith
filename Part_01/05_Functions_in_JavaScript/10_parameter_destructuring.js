// parameter destructuring 

// Object
// react-> param destructure used most

const person = {
    firstName : "dashvanth",
    age : 22
}

// const printDetails = (obj)=>{
//     console.log(obj.firstName);
//     console.log(obj.age);
// }

// para desturturing 
function printDetails({firstName, age}){
    console.log(firstName);
    console.log(age);
}
printDetails(person);