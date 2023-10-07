// class keyword 

// 2015 js version class keyword 
// class are fake 

class CreateUser{
    constructor(firstName, lastName, email, age, address){
        console.log('constructor called');
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address; 
    }

    about(){
        return `${this.firstName} is ${this.age} years old.`;
    }
    is18(){
        return this.age >=18;
    }
    sing(){
        return `la la la`;
    }
    sum(a,b){
        return a+b;
    }
}



const user1 = new CreateUser('dashvanth', 'raj', 'dashvanthrjahc@gamil.com', 22, 'banglore' , "i am full stack developer", "he is 22!");

const user2 = new CreateUser('ananya', 'hc', 'dashvanthrjahc@gamil.com', 18, 'banglore' , "i am full stack developer", "he is 22!");

const user3  = new CreateUser('priya', 'lokesh', 'dashvanthrjahc@gamil.com', 22, 'banglore' , "i am full stack developer", "he is 22!");

console.log(user1.firstName);
console.log(user1.is18);
console.log(user3.email);
console.log(Object.getPrototypeOf(user1));

console.log(user1.sum(10,20));