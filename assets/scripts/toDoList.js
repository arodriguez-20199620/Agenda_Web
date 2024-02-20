const todoList = document.getElementById('todo-list');

    function addTask() {
      const newTaskInput = document.getElementById('new-task');
      const taskText = newTaskInput.value.trim();

      if (taskText !== '') {
        const priority = prompt('Ingrese la prioridad (alta, media, baja):');
        const task = { text: taskText, priority: priority || 'media' };
        displayTask(task);
        newTaskInput.value = '';
      }
    }

    function displayTask(task) {
      const taskElement = document.createElement('div');
      taskElement.classList.add('task');
      taskElement.innerHTML = `
        <span>${task.text}</span>
        <span class="priority">${task.priority}</span>
        <button class="btn btn-warning" onclick="editTask(this)">Editar</button>
        <button class="btn btn-danger" onclick="deleteTask(this)">Eliminar</button>
      `;
      todoList.appendChild(taskElement);
    }

    function editTask(button) {
      const taskElement = button.parentNode;
      const newText = prompt('Editar tarea:', taskElement.children[0].textContent);
      if (newText !== null) {
        taskElement.children[0].textContent = newText;
      }
    }

    function deleteTask(button) {
      const taskElement = button.parentNode;
      todoList.removeChild(taskElement);
    }