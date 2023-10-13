// promisifying xhr reuqests and chaining them using then method 


const URL = "https://jsonplaceholder.typicode.com/posts"

function sendRequest(method, url){
    return new Promise(function(resolve,reject){
        const xhr = new XMLHttpRequest();
        xhr.open(method,url);
        xhr.onload = function(){
            if(xhr.status >= 200 && xhr.status <300){
                resolve(xhr.response);
            }else{
                reject(new Error("something went wrong!"))
            }
        }

        xhr.onerror = function(){
            reject(new Error("network error"))
        }
        xhr.send();
    })
}

sendRequest("GET", URL)
    .then(response =>{
    const data = JSON.parse(response);
    return data;
    })
    .then(data=>{
        console.log(data);
        console.log(data[3].id);
        const id = data[3].id;
        return id;
    })
    .then(id=>{
        const url = `${URL}/${id}`;
        console.log(url);
        return sendRequest("GET", url);
    })
    .then(newResponse=>{
        const data2 = JSON.parse(newResponse);
        console.log( data2);
    })
    .catch(error=>{
        console.log("somthing is wrong!");
    })
