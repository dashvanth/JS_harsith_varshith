//  closure example 1 


function hello(x){
    const a = "varA";
    const b = "varB";
    return function(){/*this func takes the upper variables and returns*/
        console.log(a,b,x);
    }
}
const ans = hello("arg");
ans();