const taskInput = document.getElementById('taskInput');
        const taskList = document.getElementById('taskList');

        function addTask() {
            const taskText = taskInput.value.trim();
            if (taskText === '') return;

            const li = document.createElement('li');

            li.innerHTML = `
                <span onclick="toggleComplete(this)">${taskText}</span>
                <button onclick="deleteTask(this)">Delete</button>
            `;

            taskList.appendChild(li);
            taskInput.value = '';
        }

        function deleteTask(button) {
            const li = button.parentElement;
            li.remove();
        }

        function toggleComplete(span) {
            span.parentElement.classList.toggle('completed');
        }

        // Optional: allow pressing Enter to add task
        taskInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                addTask();
            }
        });