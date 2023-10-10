// insertAdjacentHTML
// beforebegin, afterbegin
// beforeend,afterend

const todoList = document.querySelector(".todo-list");
todoList.insertAdjacentHTML("beforeend", "<li>sleeping early</li")
todoList.insertAdjacentHTML("afterbegin", "<li>sleeping early</li")