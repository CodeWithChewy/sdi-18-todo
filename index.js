console.log('My code is running');
// let toDoItems = [];
const addToDoItem = (item) => {
    const toDoList = document.getElementById('todo-list');

    const li = document.createElement('li');
    li.innerText = item;

        li.addEventListener('click', () => {
            toDoList.removeChild(li);
        })

      toDoList.appendChild(li);
};

let form = document.getElementById("todo-form"); 

const mySubmitFunction = (e) => {
  e.preventDefault();  
  const input = document.getElementById('todo-input');
    addToDoItem(input.value)
    input.value = "";
};
console.log(form)
form.addEventListener("submit", mySubmitFunction);