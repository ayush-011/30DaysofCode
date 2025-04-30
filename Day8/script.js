const inputBox = document.getElementById("input-box");
const addButton = document.getElementById("add-button");
const listContainer = document.getElementById("list-container");
const emptyMessage = document.getElementById("empty-message");

window.addEventListener("DOMContentLoaded", loadTasks);

addButton.addEventListener("click", addTask);
inputBox.addEventListener("keypress", function (e) {
  if (e.key === "Enter") addTask();
});

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveTasks();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveTasks();
    updateEmptyMessage();
  }
});

function addTask() {
  const taskText = inputBox.value.trim();
  if (taskText === "") {
    alert("Please write a task!");
    return;
  }

  createTaskElement(taskText, false);
  inputBox.value = "";
  saveTasks();
  updateEmptyMessage();
}

function createTaskElement(text, checked) {
  const li = document.createElement("li");
  li.textContent = text;
  if (checked) li.classList.add("checked");

  const span = document.createElement("span");
  span.textContent = "×";
  li.appendChild(span);

  listContainer.appendChild(li);
}

function saveTasks() {
  const tasks = [];
  listContainer.querySelectorAll("li").forEach((li) => {
    tasks.push({
      text: li.childNodes[0].nodeValue.trim(),
      checked: li.classList.contains("checked"),
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  listContainer.innerHTML = "";

  storedTasks.forEach((task) => {
    createTaskElement(task.text, task.checked);
  });

  updateEmptyMessage();
}

function updateEmptyMessage() {
  emptyMessage.style.display =
    listContainer.children.length > 0 ? "none" : "block";
}
