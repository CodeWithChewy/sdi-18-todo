console.log('My code is running');
const toDoList = document.getElementById('todo-list');
const archiveList = document.getElementById('archive-list');

const addToDoItem = (item) => {
    const li = document.createElement('li');
    li.innerText = item;

    li.addEventListener('click', () => {
        if (li.parentNode === toDoList) {
            toDoList.removeChild(li);
            archiveList.appendChild(li);
        } else {
            archiveList.removeChild(li);
        }
    });

    toDoList.appendChild(li);
};

let form = document.getElementById("todo-form"); 

const mySubmitFunction = (e) => {
    e.preventDefault();  
    const input = document.getElementById('todo-input');
    addToDoItem(input.value);
    input.value = "";
};

form.addEventListener("submit", mySubmitFunction);
