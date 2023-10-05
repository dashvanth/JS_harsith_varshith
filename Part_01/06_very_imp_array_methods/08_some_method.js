// some method  -> works exactly opposite of every method. it returns true if one value is satisfied


const numbers = [1,3,5,7,8];

const isEven = numbers.some((number)=>number%2===0)
console.log(isEven);


// real life example 
const userCart = [
    { productId: 1, productName: "smartWatch", price: 55000 },
    { productId: 2, productName: "macbook", price: 440000 },
    { productId: 1, productName: "mobile", price: 40000 },
  ];

const aboveLakh = userCart.some((pricechecker)=>{
    return pricechecker.price>100000
})

console.log(aboveLakh);