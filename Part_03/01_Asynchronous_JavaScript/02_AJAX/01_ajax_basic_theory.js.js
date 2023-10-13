// BASIC THEORY 

// AJAX : asynchronous javascript and XML

// is a set of "web development techniques" 
// using many web technologies on the "client-side "
// to create asynchronous web applications. 

// HTTP request -- we can get the data from server to the client side through this 
// this is working in background

// With Ajax, web applications can send and retrieve 
// data from a server asynchronously (in the background) 
// without interfering with the display and 
// behaviour of the existing page

// We don't use data in XML format anymore. 
// we use JSON now. 

//-----------------------------------------------------------
// we have 3 most common ways to create and send request to server
// 1.) xmlHTTPRequest (old way of doing)
// 2.) fetch API (new way of doing)
// 3.) axios (this is third party library)








const URL = "https://jsonplaceholder.typicode.com/posts"
const xhr = new XMLHttpRequest();
// console.log(xhr);

// step 1 : 
// getting request using open method 
// before open method ready state is 0 
// console.log(xhr.readyState);
xhr.open("GET", URL)
// after open method ready state is 1 
// console.log(xhr.readyState);
// onreadystatechange->runs when the readstate changes 
// ready state - 4 means -> request recieved successfully done 
// xhr.onreadystatechange = function(){
//     // console.log(xhr.readyState);
//     if(xhr.readyState === 4){
//         // console.log(xhr.response); gives response
//         const response = xhr.response;
//         const data = JSON.parse(response);
//         console.log(typeof data);
//     }
// }

// we can also use onload method 
// xhr.onload = function(){
//     console.log(xhr.readyState);
// }


xhr.onload = function(){
    const response = xhr.response;
    const data = JSON.parse(response);
    console.log(typeof data);
}
// requested server to data and data is recieved 
xhr.send();

// statuscode -> 200 is successful, 400 is error in bad syntax 