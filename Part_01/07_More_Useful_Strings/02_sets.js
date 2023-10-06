// sets => = new Set()
// it is iterables 
// stores data 
// has its own method 
// no index based access 
// order is not guaranteed
// uniqure values only allowed (no repeatation of elements)

const items = new Set(['item1', 'item2']);
console.log( items);
console.log(items[0]);//not allowed index based

const char = new Set('abcc'); //no repeatation
console.log(char);


// empty set and adding ele's

// add method 
const values = ['value1', 'value2', 'value3'];
const numbers = new Set();
numbers.add(1); 
numbers.add(2); 
numbers.add(2); 
numbers.add(values);
numbers.add(values);//not allowed repeatation
numbers.add(['item1', 'item2'])
numbers.add(['item1', 'item2']) //allowed coz different memory address
console.log(numbers);

// has method -> used to check the ele exist or not 
if(numbers.has(1)){
    console.log('1 is present');
}else{
    console.log('not present');
}


// set is iterable
const evenNumbers = new Set();
evenNumbers.add(1);
evenNumbers.add(2);
evenNumbers.add(3);
evenNumbers.add(4);
evenNumbers.add(5);
evenNumbers.add(6);

for(let evennumber of evenNumbers){
    console.log(evennumber);
}


// real life example 
const myArray = [1,2,3,4,4,5,6,6];
const uniqueElements = new Set(myArray);
console.log(uniqueElements);
console.log(myArray);

let length = 0;
for(let element of uniqueElements){
    length++;
}
console.log(length);
