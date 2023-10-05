// reduce method 

const numbers = [1,2,3,4,5];

// aim: sum of all numbers 

const total = numbers.reduce((accumulator,currentValue)=>{
    return accumulator + currentValue;
});

console.log(total);


// accumulator, currentValue , return
// 1           + 2             = 3 
// 3           + 3             = 6
// 6           + 4             = 10     
// 10           + 5            = 15     


// real world example 

const userCart = [
    {productId:1, productName:"smartWatch", price:5000},
    {productId:2, productName:"macbook", price:30000},
    {productId:1, productName:"mobile", price:10000},
]

// need sum of all products purchased 

const totalPurchased = userCart.reduce((totalPrice,currentProduct)=>{
    return currentProduct.price + totalPrice;
}, 0/*intialvalue*/)

console.log(totalPurchased);


// dry run 
// totalPrice + currentProduct , return 
// 5000       +       0         = 5000
// 5000       +       30000     = 35000
// 35000      +       10000     = 45000