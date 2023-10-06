// Cloning using Object.assign 

// memory 

const obj = {
    key1 : "value1", 
    key2 : "value2"
}

// const obj2 = obj; ->not properly cloned
// const obj2 = {...obj}; properly cloned

// another way 
const obj2 = Object.assign({}, obj)
obj.key3 = "value3";
console.log(obj2);
console.log(obj);