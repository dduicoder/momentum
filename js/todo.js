const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

let toDos = [];

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
}
function deleteToDo(event) {
  const div = event.target.parentElement;
  div.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(div.id));
  saveToDos();
}
function paintToDo(newTodo) {
  const div = document.createElement("div");
  const span = document.createElement("span");
  const button = document.createElement("button");

  div.id = newTodo.id;
  span.innerText = `• ${newTodo.text}`;
  button.innerText = "X";
  button.setAttribute("class", "todo-cancel");
  button.addEventListener("click", deleteToDo);
  
  div.appendChild(span);
  div.appendChild(button);
  toDoList.appendChild(div);
}
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
const savedToDos = localStorage.getItem("todos");
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}