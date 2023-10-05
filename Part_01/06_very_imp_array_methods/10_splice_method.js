// splice method 

// splice(start,delete,insert)


const myArray = ['item1', 'item2', 'item3', 'item4'];

// delete 
// myArray.splice(1,1)
// console.log(myArray);

// insert 
// myArray.splice(4,0,'item0','item5');
// console.log(myArray);

// delete and insert 

myArray.splice(0,2,'inserted item1','inserted item2');
console.log(myArray);