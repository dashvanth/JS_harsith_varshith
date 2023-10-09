// get and set attributes 

// getAttribute => used to getAttribute of the element 
// setAttribute ->used to setAttribute for element 

const link = document.querySelector('a');
// console.log(link);
console.log(link.getAttribute('href'));
link.setAttribute("href", "#home")
console.log(link.getAttribute('href').slice(1))
