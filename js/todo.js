document.addEventListener("DOMContentLoaded", function () {
  const toDoForm = document.getElementById("todo-form");
  const toDoInput = toDoForm.querySelector("input");
  // == const toDoInput = document.querySelector("#todo-form input");
  const toDoList = document.getElementById("todo-list");

  let toDos = [];

  const TODOS_KEY = "todos";
  function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  }

  function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
  }

  function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id;
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerText = "DEL";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.append(li);
  }

  function handleToDoSubmit(event) {
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
      text: newToDo,
      id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
  }

  toDoForm.addEventListener("submit", handleToDoSubmit);

  const savedToDos = localStorage.getItem(TODOS_KEY);

  if (savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
  }
});
