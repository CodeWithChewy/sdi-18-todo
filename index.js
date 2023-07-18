console.log('My code is running');
// let toDoItems = [];
const addToDoItem = (item) => {
    const toDoList = document.getElementById('todo-input');

    const li = document.createElement('li');
    li.innerText = item;
};

let btn = document.getElementById("todo-form"); 

const myClickFunction = () => {
    const input = document.getElementById('todo-input');
    addToDoItem(input.value)
    input.value = "";
};
console.log(btn)
btn.addEventListener("click", myClickFunction);