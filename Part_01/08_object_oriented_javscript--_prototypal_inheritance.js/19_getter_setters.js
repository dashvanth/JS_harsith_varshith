// getters and setters 

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    // setName(firstName, lastName){
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    // }

// set ->we can set/change another name using set
    set fullName(fullName){
        const [firstName, lastName ] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

// class Person1 extends Person{
//     constructor(firstName, lastName, age){
//         super(firstName,lastName,age);
//     }
//     hobby(){
//         return `${this.firstName} hobby is reading books.`
//     }
// }


const person2 = new Person("dashvanth", "raj", 22);
// console.log(person2.fullName());
// if we want to use methods without (). we can use get 

// we can use method as a propery by using get 
// console.log(person2.fullName);
// console.log(person2.firstName);


// console.log(`before set ${person2.fullName}`);

// person2.setName("dashvanth", "gowda");

// another way 
// person2.firstName = "dashvanth",
// person2.lastName = "gowda"
// console.log(`after set ${person2.fullName}`);


// set ->we can set/change another name using set
console.log(person2.fullName);
person2.fullName = "dashvanth gowda";
console.log(person2.fullName);