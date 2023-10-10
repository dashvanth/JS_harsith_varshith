// event bubbling -> when child is called it calls the parent and if parent has callback(grandparent) it will be called and same goes on.

// console.log("hello world");

const grandParent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
const body = document.body;
child.addEventListener("click", ()=>{
    console.log("bubble Child");
})

grandParent.addEventListener("click", ()=>{
    console.log("bubble Grand Parent");
})

parent.addEventListener("click", ()=>{
    console.log("bubble parent");
})
body.addEventListener("click", ()=>{
    console.log("bubble body");
})

// =============================================
// event capturing 

child.addEventListener("click", ()=>{
    console.log("Capture Child");
}, true)

grandParent.addEventListener("click", ()=>{
    console.log("Capture Grand Parent");
}, true)

parent.addEventListener("click", ()=>{
    console.log("Capture parent");
}, true)
body.addEventListener("click", ()=>{
    console.log(("Capture body"));
})

// event delegation -> we use (e) to control bubbling and capturing of event 
child.addEventListener("click", (e)=>{
    console.log(e.target);
}, true)

grandParent.addEventListener("click", (e)=>{
    console.log(e.target);
}, true)

parent.addEventListener("click", (e)=>{
    console.log(e.target);
}, true)
body.addEventListener("click", (e)=>{
    console.log(e.target);
})
