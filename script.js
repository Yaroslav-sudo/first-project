document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskTitleInput = document.getElementById('task-title');
    const taskDescriptionInput = document.getElementById('task-description');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const title = taskTitleInput.value.trim();
        const description = taskDescriptionInput.value.trim();

        if (title === '') {
            alert('Пожалуйста, введите название задачи.');
            return;
        }

        addTask(title, description);
        taskForm.reset();
        taskTitleInput.focus();
    });

    function addTask(title, description) {
        const taskCard = document.createElement('div');
        taskCard.className = 'task-card';

        const taskTitle = document.createElement('h3');
        taskTitle.textContent = title;
        taskCard.appendChild(taskTitle);

        if (description) {
            const taskDescription = document.createElement('p');
            taskDescription.textContent = description;
            taskCard.appendChild(taskDescription);
        }

        const deleteButton = document.createElement('button');
        deleteButton.className = 'btn-delete';
        deleteButton.textContent = 'Удалить';
        taskCard.appendChild(deleteButton);

        taskList.appendChild(taskCard);
    }

    taskList.addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-delete')) {
            const taskCard = event.target.closest('.task-card');
            if (taskCard) {
                taskCard.remove();
            }
        }
    });

    addTask('Прочитать книгу', 'Прочитать "Мастер и Маргарита" до конца недели.');
    addTask('Сходить в спортзал', 'Тренировка на спину и бицепс.');
});