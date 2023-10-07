// use of prototype 


// const userMethods = {
//     about : function(){
//         return `${this.firstName}, ${this.age}`;
//     },
//     is18 : function(){
//         return this.age>18;
//     },
//     sing : function(){
//         return "la la la lo";
//     }
// }

function createUser(firstName, lastName, email, age, address){
    const user = Object.create(createUser.prototype); //relationship established
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address; 
    return user;
}

// console.log(createUser.prototype);

// adding methods to prototype coz it gives free space {}
createUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
}
createUser.prototype.is18 = function(){
    return this.age >= 18;
}
createUser.prototype.sing = function(){
    return `lalala`;
}

const user1 = createUser('dashvanth', 'raj', 'dashvanthrjahc@gamil.com', 22, 'banglore' , "i am full stack developer", "he is 22!");

const user2 = createUser('ananya', 'hc', 'dashvanthrjahc@gamil.com', 18, 'banglore' , "i am full stack developer", "he is 22!");

const user3  = createUser('priya', 'lokesh', 'dashvanthrjahc@gamil.com', 22, 'banglore' , "i am full stack developer", "he is 22!");


console.log(user1.about());
console.log(user2.is18());

// prototype -> simple Object 
// proto -> reference of the chain you create 