// new keyword 

function createUser(firstName, age){
    // this = {} -> new kw created like this
    this.firstName = firstName;
    this.age = age;
}


createUser.prototype.about = function(){
    console.log(this.firstName, this.age);
}

const user1 = new createUser('dashvanth',22);
// new keyword -> 3 works
// 1. creating empty object  this = {}
// 2. return empty object
// 3. Object.create(createUser.prototype) -> new keyword does this work automatically. means it builds the connection. 


user1.about();
console.log(user1.firstName);
