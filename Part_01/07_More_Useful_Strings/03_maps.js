// map ->// object keys can't have dfrnt datatype so map can have and it it used 
// stays in ordered fashion

// difference between object and map 
// objects can only have string or Symbol 

// in map you can use any type for key like String, array, number, object 


console.log('object literal key difference');
// object literal
// object keys is always-> string 99%, 1% is Symbol(maybe);
const person = {
    firstName: "dashvanth",
    age : 22,
    1: 'one'
}
// string check
console.log(person['1']);
console.log(typeof person['1']);
console.log(person.firstName);
console.log(person["firstName"]);



console.log("map concept");
// map 
const Person = new Map();   
Person.set('firstName','dashvanth');
Person.set('age',22);
Person.set(1,'one');
Person.set([1,2,3],"onetwothree")
// Person.set();
// console.log(Person.get(1));
// console.log(Person.keys()); used to get all keys

// for(let key of Person.keys()){
//     console.log(key , typeof key);
// }

// for of loop 
for(let [key, value] of Person){
    console.log(key, value);
}

// you can add map like this 
const personn = new Map([['firstName', 'dashvanth'], ['age', 22]])
console.log(personn);


// map real life example 
const person1 = {
    id:1,
    firstName:'dashvanth'
}

const extraInfo = new Map();
extraInfo.set(person1, {age: 22, gender:"male"});
console.log(extraInfo);
console.log(person1.id);
console.log(extraInfo.get(person1).age);
