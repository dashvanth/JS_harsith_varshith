// lexical scope in function inside function 

// lexical scope-> inside fn can access outside var but outside fn can't access inside function var 
function Devices(){
    let deviceColor = "matte black";
    function device1(){
        let deviceModel = "2001";
        console.log(deviceColor);
    }
    device1();
    // console.log(deviceModel); error: can't access inside function(lexical scope)
    const device2 = function(){}
    const device3 = ()=>{}
}
Devices();

const myVar = "value1";
function myApp(){
    // const myVar = "value2";
    const myFunc = function(){
        // const myVar = "value59";
        console.log("inside myFunc", myVar);

        const myFunc2 = () =>{
            // const myVar = "value 89";
            console.log("inside myFunc2", myVar);
        }
        myFunc2();
    }
    myFunc();
    console.log("inside myApp");
}
myApp(); 


// fn declaration 
function userInfo(){
    function user1(){
        console.log("inside user 1");
    }


    function user2(){
        console.log("inside user 1");
    }
}

// fn expression 
// const userInfo = function(){
//     const user1 = function(){
//         console.log("inside user 1");
//     }
//     const user2 = function(){
//         console.log("inside user 2");
//     }
// }

// arrow fn 
// const userInfo = ()=>{
//     const user1=()=>{
//         console.log("inside user 1");
//     }


//     const user2=()=>{
//         console.log("inside user 2");
//     }
// }

