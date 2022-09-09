const input = document.querySelector("[data-input]")
const addTodoButton = document.querySelector("[data-button-add]")
const removeTodoButton = document.querySelector("[data-button-remove]")
const todoList = document.querySelector("[data-todo-list]")
const form = document.querySelector("[data-form]")

form.addEventListener("submit", (e) => {
  e.preventDefault()

  if (input.value != "") {
    const todoTaskList = document.createElement("li")
    todoTaskList.classList = "todo-item"
    todoTaskList.innerText = input.value
    todoList.appendChild(todoTaskList)
    input.value = ""

    todoTaskList.addEventListener("click", () => {
      todoTaskList.classList.toggle("todo-item-toggle-line-through")
    })
    removeTodoButton.addEventListener("click", () => {
      todoList.removeChild(todoTaskList)
    })
  } else {
    console.log("Enter value u fool")
  }
})
