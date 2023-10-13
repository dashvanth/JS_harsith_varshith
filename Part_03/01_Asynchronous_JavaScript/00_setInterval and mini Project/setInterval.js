const body = document.body;

const intervalId = setInterval(()=>{
    const red = Math.floor(Math.random()*126)+1;
    const blue = Math.floor(Math.random()*126)+1;
    const green = Math.floor(Math.random()*126)+1;
    const rgb = `rgb(${red}, ${blue}, ${green})`;
    body.style.background = rgb

},1000)
// console.log(intervalId);
const btn = document.querySelector("button");
btn.addEventListener("click",()=>{
    clearInterval(intervalId);
    btn.textContent = body.style.background;
})
