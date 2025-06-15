// document.addEventListener("DOMContentLoaded", () => {
//   // Select Dom elements
//   const addButton = document.getElementById("add-task-btn");
//   const taskinput = document.getElementById("task-input");
//   const taskList = document.getElementById("task-list");

//   //   Load tasks from Local storage
//   const savedTasks = localStorage.getItem("tasks");
//   if (savedTasks) {
//     const taskArray = JSON.parse(savedTasks);
//     taskArray.forEach((taskText) => renderTask(taskText));
//   }

//   //   Define the function to render a task to the DOM
//   function renderTask(taskText) {
//     const listItem = document.createElement("li");
//   }

//   function addTask() {
//     const taskText = taskInput.value.trim();

//     if (taskText === "") {
//       alert("Please enter a Task");
//       return;
//     }

//     const listItem = document.createElement("li");
//     listItem.textContent = taskText;
//     const removeButton = document.createElement("button");
//     removeButton.textContent = "Remove";
//     removeButton.className = "remove-btn";
//     removeButton.onclick = () => {
//       taskList.removeChild(listItem);
//     };
//     listItem.appendChild(removeButton);
//     taskList.appendChild(listItem);
//     taskInput.value = "";
//   }

//   addButton.addEventListener("click", addTask);
//   taskinput.addEventListener("keypress", (event) => {
//     if (event.key === "enter") {
//       addTask();
//     }
//   });
// });

// document.addEventListener("DOMContentLoaded", addTask);

// Core logic wrapped in DOMContentLoaded
// document.addEventListener("DOMContentLoaded", () => {
//   // Select DOM elements
//   const addButton = document.getElementById("add-task");
//   const taskInput = document.getElementById("task-input");
//   const taskList = document.getElementById("task-list");

//   // Load tasks from Local Storage (if any)
//   const savedTasks = localStorage.getItem("tasks");
//   if (savedTasks) {
//     const taskArray = JSON.parse(savedTasks);
//     taskArray.forEach((taskText) => renderTask(taskText));
//   }

//   // Define the function to render a task to the DOM
//   function renderTask(taskText) {
//     const listItem = document.createElement("li");
//     listItem.textContent = taskText;

//     const removeButton = document.createElement("button");
//     removeButton.textContent = "Remove";
//     removeButton.className = "remove-btn";

//     removeButton.onclick = () => {
//       taskList.removeChild(listItem);
//       removeTaskFromStorage(taskText);
//     };

//     listItem.appendChild(removeButton);
//     taskList.appendChild(listItem);
//   }

//   // Define the function to add a new task
//   function addTask() {
//     const taskText = taskInput.value.trim();
//     if (taskText === "") {
//       alert("Please enter a task.");
//       return;
//     }

//     renderTask(taskText);
//     updateLocalStorage(); // ✅ Save to localStorage after adding
//     taskInput.value = "";
//   }

//   // Save current tasks to Local Storage
//   function updateLocalStorage() {
//     const tasks = [];
//     taskList.querySelectorAll("li").forEach((li) => {
//       const task = li.firstChild.textContent;
//       tasks.push(task);
//     });
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//   }

//   function removeTaskFromStorage(taskToRemove) {
//     const currentTasks = JSON.parse(localStorage.getItem("tasks")) || [];
//     const updatedTasks = currentTasks.filter((task) => task !== taskToRemove);
//     localStorage.setItem("tasks", JSON.stringify(updatedTasks));
//   }

//   function loadTasksFromStorage() {
//     const savedTasks = localStorage.getItem("tasks");
//     if (savedTasks) {
//       const taskArray = JSON.parse(savedTasks);
//       taskArray.forEach((taskText) => renderTask(taskText));
//     }
//   }

//   loadTasksFromStorage();

//   // Event listeners
//   addButton.addEventListener("click", addTask);
//   taskInput.addEventListener("keypress", (event) => {
//     if (event.key === "Enter") {
//       addTask();
//     }
//   });
// });

// // Optional: initial call to addTask on load (as per earlier requirement)
// document.addEventListener("DOMContentLoaded", addTask);

document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("add-task");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // In-memory array of tasks
  let tasks = [];

  // Load tasks from Local Storage on page load
  function loadTasksFromStorage() {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      tasks = JSON.parse(savedTasks);
      tasks.forEach((taskText) => renderTask(taskText));
    }
  }

  // Render a task to the DOM
  function renderTask(taskText) {
    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-btn";

    removeButton.onclick = () => {
      taskList.removeChild(listItem);
      tasks = tasks.filter((task) => task !== taskText);
      saveTasksToStorage();
    };

    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);
  }

  // Add a new task
  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    tasks.push(taskText);
    renderTask(taskText);
    saveTasksToStorage();
    taskInput.value = "";
  }

  // Save tasks array to Local Storage
  function saveTasksToStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // Event listeners
  addButton.addEventListener("click", addTask);

  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });

  // Load existing tasks on page load
  loadTasksFromStorage();
});
