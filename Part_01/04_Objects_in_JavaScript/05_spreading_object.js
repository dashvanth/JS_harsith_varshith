// spread in Array 
const array1 = [1,2,3];
const array2 = [4,5,6];

// const newArray = [...array1, ...array2];
const newArray = [...array1, ..."456"];
console.log(newArray);


// spread operator in objects 
const obj1 = {
    key1: "value1",
    key2: "value2"
}

const obj2 = {
    key3: "value3",
    key4: "value4"
}

// object clone 
// const newObj = {...obj1, ...obj2};
// console.log(newObj);

// no duplicate key will remain obj. it'll override ex:
const obj3 = {
    key5: "value5",
    key6: "value6",
    key1: "valueunique" //key is repeating while cloning It overrides the obj1 
}
const newObj = {...obj1, ...obj2, ...obj3};
console.log(newObj);
