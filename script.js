// Get references to HTML elements
const taskInput = document.getElementById('taskInput');
const dateInput = document.getElementById('dateInput');
const addButton = document.getElementById('addButton');
const sortButton = document.getElementById('sortButton');
const taskList = document.getElementById('taskList');

// Array to store tasks
const tasks = [];

// Event listener for "Add Task" button
addButton.addEventListener('click', addTask);

// Event listener for "Sort by Date" button
sortButton.addEventListener('click', sortTasksByDate);

// Function to add a new task
function addTask() {
    // Get the task and date values from the input fields
    const task = taskInput.value;
    const date = dateInput.value;

    // Create a new task object
    const newTask = { task, date };

    // Add the task to the tasks array
    tasks.push(newTask);

    // Render the updated task list
    renderTasks();

    // Clear the input fields
    taskInput.value = '';
    dateInput.value = '';
}

// Function to render the task list
function renderTasks() {
    // Clear the existing task list
    taskList.innerHTML = '';

    // Loop through the tasks array and create the task elements
    for (const task of tasks) {
        const taskItem = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', toggleTaskStatus);

        const taskLabel = document.createElement('label');
        taskLabel.textContent = task.task;

        const dateSpan = document.createElement('span');
        dateSpan.textContent = task.date;

        taskItem.appendChild(checkbox);
        taskItem.appendChild(taskLabel);
        taskItem.appendChild(dateSpan);

        taskList.appendChild(taskItem);
    }
}

// Function to toggle the status of a task
function toggleTaskStatus(event) {
    const taskItem = event.target.parentNode;
    taskItem.classList.toggle('completed');
}

// Function to sort tasks by date
function sortTasksByDate() {
    tasks.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
    });

    // Render the sorted task list
    renderTasks();
}
