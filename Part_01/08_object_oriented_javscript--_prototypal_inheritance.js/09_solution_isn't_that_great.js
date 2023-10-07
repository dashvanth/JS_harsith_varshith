// why the solution is not great  


const obj1 = {
    key1: "value1",
    key2: "value2"
}
// const obj2 = {
//     key3: "value3"
// }

// problem : obj1 doesn't have key3,so it should check obj2 has key3 and we have make it like that
// console.log(obj1.key3); problem undefined

// another way to create empty object 
const obj2 = Object.create(obj1);
obj2.key3 = "value3";
console.log(obj2);
// console.log(obj2.key2);

// obj2.key2 = "unique";

// console.log(obj2.key2);
// Object.create(obj1);creates some kind of connection and we can access the other object's keys

console.log(obj2);
// --proto-- and [[prototype]] are same
//it contains the another object keys value pairs
// for example 
// obj2 ka proto obj1 hai 
console.log(obj2.__proto__);

// prototype is different concept



// solution for the problem 

const userMethods = {
    about : function(){
        return `${this.firstName}, ${this.age}`;
    },
    is18 : function(){
        return this.age>18;
    },
    sing : function(){
        return "la la la lo";
    }
}

function createUser(firstName, lastName, email, age, address){
    const user = Object.create(userMethods); //relationship established
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address; 8;
    return user;
}


const user1 = createUser('dashvanth', 'raj', 'dashvanthrjahc@gamil.com', 22, 'banglore' , "i am full stack developer", "he is 22!");

const user2 = createUser('ananya', 'hc', 'dashvanthrjahc@gamil.com', 18, 'banglore' , "i am full stack developer", "he is 22!");

const user3  = createUser('priya', 'lokesh', 'dashvanthrjahc@gamil.com', 22, 'banglore' , "i am full stack developer", "he is 22!");


console.log(user1); //__proto__ is set(about,is18,sing)
console.log(user1.about());
console.log(user2.about());