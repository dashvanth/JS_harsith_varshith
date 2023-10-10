// clone nodes 

const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "drink 2l water";
// ul.append(li);

// we can't append and prepend same element so we can clone node 
const li2 = li.cloneNode(true); /*true means deep cloning*/
ul.append(li);
ul.prepend(li2);


