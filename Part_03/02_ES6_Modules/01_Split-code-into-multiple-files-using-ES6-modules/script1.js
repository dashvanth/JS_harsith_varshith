// set the type="module" in script tag html file 

import { firstName } from "./script2";
import {age} from "./script3";
import { Person } from "./script4";
console.log(firstName,age);

const person1 = new Person("dashvanth","raj",22);
person1.info();