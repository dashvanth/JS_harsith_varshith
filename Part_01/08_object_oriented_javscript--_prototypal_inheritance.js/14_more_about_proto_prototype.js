// more discussions about proto and prototype 


function CreateUser(firstName, lastName, email, age, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address; 
    // return this; not needed 
}


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


// if you only want user1 keys not its prototpye methods . you can use hasOwnPropery
for(let key in user1){
    // console.log(key);
    if(user1.hasOwnProperty(key)){
        console.log(key);
    }
}

// -------------------------

// let numbers = [1,2,3,4] 

// inner javascript create array like this 
let numbers = new Array(1,2,3,4);

// all the array methods are given by prototype 
// for ex: numbers.splice.join.map.reduce etccc

console.log(Array.prototype);
console.log(numbers);

console.log(Object.getPrototypeOf(numbers));