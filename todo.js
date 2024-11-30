// Select elements
const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Add Task
addButton.addEventListener('click', addTask);
todoInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});

function addTask() {
  const taskText = todoInput.value.trim();
  if (taskText === '') return;

  const todoItem = document.createElement('li');
  todoItem.className = 'todo-item';

  const textSpan = document.createElement('span');
  textSpan.className = 'todo-text';
  textSpan.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.innerHTML = '×';
  deleteBtn.addEventListener('click', () => {
    todoItem.style.animation = 'slideUp 0.3s reverse forwards';
    setTimeout(() => todoItem.remove(), 300);
  });

  todoItem.appendChild(textSpan);
  todoItem.appendChild(deleteBtn);

  todoList.appendChild(todoItem);
  todoInput.value = '';
}

// Mark Task as Done
todoList.addEventListener('click', (e) => {
  if (e.target.classList.contains('todo-text')) {
    e.target.parentElement.classList.toggle('done');
  }
});
