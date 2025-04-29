// Select elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Add event listener
addTaskBtn.addEventListener('click', function () {
  const taskText = taskInput.value.trim();

  // Check if input is empty
  if (taskText === '') {
    alert('Please enter a task.');
    return;
  }

  // Create list item
  const li = document.createElement('li');
  li.textContent = taskText;

  // Create remove button
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.style.marginLeft = '10px';

  // Add event to remove the task
  removeBtn.addEventListener('click', function () {
    taskList.removeChild(li);
  });

  // Append button to list item and list item to list
  li.appendChild(removeBtn);
  taskList.appendChild(li);

  // Clear input field
  taskInput.value = '';
});
