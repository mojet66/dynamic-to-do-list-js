document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("add-task-btn");
  const taskinput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");
  function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("Please enter a Task");
      return;
    }

    const listItem = document.createElement("li");
    listItem.textContent = taskText;
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-btn";
    removeButton.onclick = () => {
      taskList.removeChild(listItem);
    };
    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);
    taskInput.value = "";
  }

  addButton.addEventListener("click", addTask);
  taskinput.addEventListener("keypress", (event) => {
    if (event.key === "enter") {
      addTask();
    }
  });
});

document.addEventListener("DOMContentLoaded", addTask);
