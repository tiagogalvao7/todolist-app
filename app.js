const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
        <span>${taskText}</span>
        <div class="li-actions">
            <button class="remove-btn">❌</button>
        </div>
    `;

  taskList.appendChild(li);
  taskInput.value = "";

  // Conclude functionality
  li.querySelector("span").addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Remove functionality
  li.querySelector(".remove-btn").addEventListener("click", () => {
    li.remove();
  });
}

// Click button to add new task
addTaskBtn.addEventListener("click", addTask);

// EPress enter to insert new task
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
