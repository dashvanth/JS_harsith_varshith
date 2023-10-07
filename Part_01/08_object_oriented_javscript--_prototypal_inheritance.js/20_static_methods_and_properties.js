// static methods and properties 

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    static classInfo(){
        return ` this is class info`
    }
    static desc = "static property";
    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(fullName){
        const [firstName, lastName ] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
    eat(){
        return `${this.name} is eating.`;
    }
    isSuperCute(){
        return this.age <= 1;
    }
    isCute(){
        return true;
    }
}


const person1 = new Person("dashvanth","raj",22);

// static method ->can use to create method where directly accessed by className(without creating obj)
// console.log(Person.classInfo());
// or 

// you can call with class only(without creating another obj)
const info = Person.classInfo();
console.log(info);

// sttaic property ->used to create a property where you can acces by className(without creating obj)
console.log(Person.desc);