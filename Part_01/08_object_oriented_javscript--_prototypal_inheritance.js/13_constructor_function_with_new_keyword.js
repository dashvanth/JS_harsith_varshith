// constructor function with new keyword 


// new keyword 
// 1. creates empty obj this= {}
// 2. return = empty obj 
// 3. builds automatic relationship like proto 


// constructor function -> construct an object

// new keyword -> whenever you are using new, you should use Capital letter at start to identify that it used new. ex: CreateUser

function CreateUser(firstName, lastName, email, age, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address; 
    return this;
}

// console.log(createUser.prototype);

// adding methods to prototype coz it gives free space {}
CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old.`;
}
CreateUser.prototype.is18 = function(){
    return this.age >= 18;
}
CreateUser.prototype.sing = function(){
    return `lalala`;
}

const user1 = new CreateUser('dashvanth', 'raj', 'dashvanthrjahc@gamil.com', 22, 'banglore' , "i am full stack developer", "he is 22!");

const user2 = new CreateUser('ananya', 'hc', 'dashvanthrjahc@gamil.com', 18, 'banglore' , "i am full stack developer", "he is 22!");

const user3  = new CreateUser('priya', 'lokesh', 'dashvanthrjahc@gamil.com', 22, 'banglore' , "i am full stack developer", "he is 22!");

console.log(user1.about());