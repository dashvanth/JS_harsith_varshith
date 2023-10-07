// method overriding 
// same method in sub class 

// base class
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

// derived class 
class Dog extends Animal{
    constructor(name,age,speed){
        super(name,age);
        this.speed = speed
    }
    eat(){
        return `modified eat : ${this.name} is eating.`;
    }
    run(){
        return `${this.name} is running at a speed of ${this.speed}kmph.`
    }
}


// Object  === instance same
const tommy = new Dog("tommy", 4, 41.4)
console.log(tommy.speed);
console.log(tommy.run());
console.log(tommy.eat());