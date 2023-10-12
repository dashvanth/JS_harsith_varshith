// turning callback hell code to promises and solving it

const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

function changeText(element, text, color, time) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if (element) {
              element.textContent = text;
              element.style.color = color;
              resolve();

            } else {
              reject("element doesn't exist");  
            }
          }, time);
    })

}

const returnedPromise = changeText(heading1,"one","green",1000);

// returnedPromise.then(()=>{
//   return changeText(heading2,"two","purple",1000)
// })
// .then(()=>{
//   return changeText(heading3,"three","violet",2000)

// })

changeText(heading1,"one","purple",1000)
.then(()=>changeText(heading2,"two","red",2000))
.then(()=>changeText(heading3,"three","green",1000))
.then(()=>changeText(heading4,"four","pink",2000))
// if any element doesn't exist we can use catch
.catch((error)=>{
  alert(error);
})