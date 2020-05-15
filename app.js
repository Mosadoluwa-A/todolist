// get data from input
// onclick that data is added to an array
// the data is then displayed on the list items

// Array
const toDos = [];
const submitBtn = document.querySelector('.fasc');
const todoList = document.querySelector('.todo-list');
let todoInput = document.querySelector('.inputs');
// Event Listner
submitBtn.addEventListener("click",addTodo);

// Function
function addTodo(e){
    e.preventDefault();
    // Create Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo-item');
    // Create Li
    const todoItem = document.createElement('li');
    todoItem.classList.add('todo');
    todoItem.innerText = todoInput.value;
    todoDiv.appendChild(todoItem);
    // Create Span
    const checkSpan = document.createElement('span');
    checkSpan.classList.add('todo-span');
    const trashSpan = document.createElement('span');
    trashSpan.classList.add('todo-span');
    // Create Icons
    const checkIcon = document.createElement('i');
    checkIcon.classList.add('fas','fa-check');
    checkSpan.appendChild(checkIcon);
    checkSpan.onclick = checkTodo;
    todoDiv.appendChild(checkSpan);
    const trashIcon = document.createElement('i');
    trashIcon.classList.add('fas','fa-trash');
    trashSpan.appendChild(trashIcon);
    todoDiv.appendChild(trashSpan);
    todoDiv.children[2].onclick = delTodo;
    // Finish Up
    todoList.appendChild(todoDiv);
    todoList.children[0].children[2].onclick = delTodo;
 
    toDos.push(todoInput.value);
    console.log(toDos);
    console.log(todoItem);
    console.log(checkIcon);
    console.log(trashIcon);
    console.log(todoDiv.children[2]);
    console.log(todoList.children[0].children[2].onclick);
    todoInput.value = "";
}

function delTodo(){
    todoList.removeChild(this.parentElement);
    alert("You Clicked Delete");
}

function checkTodo(){
    this.parentElement.style.backgroundColor = "#2CBB17";
    this.children[0].style.backgroundColor = "#2CBB17";
    const trashIcon = this.parentElement.children[2].children[0];
    trashIcon.style.backgroundColor = "#2CBB17";
    trashIcon.style.color = "#f02";
}

var myArray = [["Bulls",23],["White Sox",45]];
console.log(myArray[0][1]);