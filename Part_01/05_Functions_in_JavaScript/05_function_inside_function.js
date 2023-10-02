// function inside function 

const userInfo = function(){
    const user1 = function(){
        console.log("user 1 info");
    }
    user1();
    const user2 = function(){
        console.log("user 2 info");
    }
    user2();
    console.log("inside user info");
}
userInfo();

// fn inside fn arrow function 

const calculator = () => {
    const sumOfTwo = (a,b) => {
        console.log(a+b);
    }
    sumOfTwo(10,30);

    const subOfTwo = (a,b) => {
        console.log(a - b);
    }
    subOfTwo(100,30);

    const firstChar = (anyString) => {
        console.log(anyString[0]);
    }
    firstChar("carpedium");
}

calculator();