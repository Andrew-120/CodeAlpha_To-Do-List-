document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const categoryInput = document.getElementById("categoryInput");
    const dueDateInput = document.getElementById("dueDateInput");
    const notesInput = document.getElementById("notesInput");
    const addButton = document.getElementById("addButton");
    const taskList = document.getElementById("taskList");
    const taskCount = document.getElementById("taskCount");

    let tasks = [];

    function updateTaskCount() {
        taskCount.textContent = `${tasks.length} tasks`;
    }

    function addTask(text, category, dueDate, notes) {
        const li = document.createElement("li");
        li.innerHTML = `
            <div>
                <span>${text}</span>
                <button class="delete-button">Delete</button>
            </div>
            <div>
                <span class="category">${category}</span>
                <span class="due-date">${dueDate}</span>
                <span class="notes">${notes}</span>
            </div>
        `;
        taskList.appendChild(li);
        tasks.push({
            text: text,
            category: category,
            dueDate: dueDate,
            notes: notes,
        });
        updateTaskCount();

        const deleteButton = li.querySelector(".delete-button");
        deleteButton.addEventListener("click", function () {
            taskList.removeChild(li);
            tasks = tasks.filter((task) => task.text !== text);
            updateTaskCount();
        });
    }

    addButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        const category = categoryInput.value.trim();
        const dueDate = dueDateInput.value;
        const notes = notesInput.value.trim();

        if (taskText !== "") {
            addTask(taskText, category, dueDate, notes);
            taskInput.value = "";
            categoryInput.value = "";
            dueDateInput.value = "";
            notesInput.value = "";
        }
    });

    taskInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            addButton.click();
        }
    });
});
