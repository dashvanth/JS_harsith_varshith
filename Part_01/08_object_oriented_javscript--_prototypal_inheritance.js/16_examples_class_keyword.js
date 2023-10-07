// examples using class keyword 

// this is parent class / base class 
class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
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

// shortcut to make another class 

// this is a child class / derived class
class Dog extends Animal{

}


// time consuming 


// // const cat = new Animal('cat', 1, )
// // console.log(cat.eat());

// // // creating a new class 
// // // inheritance

// // class Dog{
// //     constructor(name, age){
// //         this.name = name;
// //         this.age = age;
// //     }
// //     eat(){
// //         return `${this.name} is eating.`;
// //     }
// //     isSuperCute(){
// //         return this.age <= 1;
// //     }
// //     isCute(){
// //         return true;
// //     }
// }
//this is time consuming

// making new obj 
const tommy = new Dog("tommy", 4);
console.log(tommy.name);
console.log(tommy);
console.log(tommy.eat())