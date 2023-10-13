// error handling in xhr request 

const URL = "https://jsonplaceholder.typicode.com/posts"
const xhr = new XMLHttpRequest();
// console.log(xhr);


xhr.open("GET", URL); //send 
xhr.onload = function(){
    if(xhr.status >= 200 && xhr.status < 300){
        const response = xhr.response;
        const data = JSON.parse(response);
        console.log(data);
        // we can also get particular user id 
        const id = data[3].id;
        const URL2 = `${URL}/${id}`;
        const xhr2 = new XMLHttpRequest();
        xhr2.open("GET", URL2);
        xhr2.onload = ()=>{
            const data2 = JSON.parse(xhr2.response);
            console.log(data2);
        }
        xhr2.send();
         
    }else{
        console.log("something went wrong");
    }

}
// onerror method 
xhr.onerror = ()=>{
    console.log("network error");
}
// you can also use arrow func 
xhr.send();