const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        const currentDate = new Date().toLocaleString();
        li.innerHTML = `
            <span>${taskText}</span>
            <span>${currentDate}</span>
            <button class="deadline-btn">Deadline</button>
            <span class="delete-btn">X</span>
        `;
        taskList.appendChild(li);

        taskInput.value = "";
    }
});

taskList.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-btn")) {
        const li = event.target.parentElement;
        taskList.removeChild(li);
    }
});
