import { firstName } from "./script2";

export class Person{
    constructor(firsName,lastName,age){
        this.firsName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    info(){
        console.log(this.firsName,this.lastName,this.age);
    }
}