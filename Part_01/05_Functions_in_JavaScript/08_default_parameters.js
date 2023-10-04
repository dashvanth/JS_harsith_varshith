// default parameters 

function addTwo(a,b=10){
    sum = a+b;
    console.log(sum);
}
addTwo(2); // even if you don't give b value it adds 10 as it's in default parameter

function addThree(a=10,b=20,c=30){
    console.log(a+b+c);
}

addThree();