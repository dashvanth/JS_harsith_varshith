// innerHTML 

const headLine = document.querySelector(".headline");
console.log(headLine);
headLine.innerHTML = "<h1>HEadline was changed</h1>";
headLine.innerHTML += `<button class="btn">done</button>`;
