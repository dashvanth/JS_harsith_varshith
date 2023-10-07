// methods 
// functions inside objects are called methods

const person = {
    firstName : "dashvanth",
    age: 22,
    about: function(){
        // console.log(`person name is ${person.firstName}, age is ${person.age}`); we can use this

        // this-> refers to current Object (which here is person)
        // this -> person 
        console.log(this); //clg(person) same
        console.log(`person name is ${this.firstName}, age is ${this.age}`);
    }
}
person.about()



// multiple data and this 

function personInfo(){
    console.log(`The person name is ${this.firstName}, age is ${this.age}`);
}
const person1 = {
    firstName: "dash",
    age : 22,
    about : personInfo
}

const person2 = {
    firstName: "ananya",
    age : 18,
    about : personInfo
}

const person3 = {
    firstName: "priya",
    age : 40,
    about : personInfo
}

// personInfo(); give undefined 

person1.about(); //will give info about person1 coz this refers to person1 now
person2.about();
person3.about();