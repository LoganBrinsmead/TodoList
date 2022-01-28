console.log("Hello, World?");

// This module is for the logic of the To-Do List
// i.e. creating To-Do List item factory functions, saving the items locally, utilizing the date-fns, etc.
// import {format, formatDistance, formatRelative, subDays} from 'date-fns';
// import { taskDOM, clearDOM } from './dom';


////// modal box code //////
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
                const modal = document.querySelector(button.dataset.modalTarget);
                openModal(modal);
        });
});

overlay.addEventListener('click', () => {
        const modals = document.querySelectorAll('.modal.active')
        modals.forEach(modal => {
                closeModal(modal);
        });
});

closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
                const modal = button.closest('.modal');
                closeModal(modal);
        });
});

function openModal(modal) {
        if (modal == null) return
        modal.classList.add('active')
        overlay.classList.add('active')
}

function closeModal(modal) {
        if (modal == null) return
        modal.classList.remove('active')
        overlay.classList.remove('active')
}
////// modal box code //////


function date() {
    // the current date 
    const date = new Date();

    return date;
}

// module for affecting the task objects' logic
const taskLogic = (() => {

        function buttonLogic() {
                // logic for the delete buttons on each task
                document.querySelectorAll('.deleteTask').addEventListener('click', () => {
                        // delete the DOM of the task using the clearDOM function
                        // first find the object by sellecting its index

                        // delete object from the array using splice

                        // decrement the index of each object in the array using forEach
                        _taskListArray.forEach(task => {
                                task.index -= 1;
                        });
                });

        }

        function createTask(obj) {
                // create a task list item in memory, give it a class of task
                const task = document.createElement('li');
                task.classList.add('task');
                
                // create the checkbox, give it complete class
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.classList.add('complete');
                
                // create div for the name of the task, give it the taskName class
                const taskName = document.createElement('div');
                taskName.textContent = obj.title;
                
                // create the edit button, give it the editTask class
                const editButton = document.createElement('button');
                editButton.textContent = 'Edit';
                editButton.classList.add('editTask');
                
                // create the delete task button, give it the deleteTask class
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.classList.add('deleteTask');
                
                // append the elements
                task.appendChild(checkbox);
                task.appendChild(taskName);
                task.appendChild(editButton);
                task.appendChild(deleteButton);
                
                return task;
        }
        
        // function to clear the DOM 
        function clearDOM(selector) {
                const content = document.querySelector(`${selector}`);
                while (content.firstChild) {
                        content.removeChild(content.lastChild);
                        }
        }
            

        // array of task objects
        let _taskListArray = [];

        // factory function to create the To-Do objects
        /**
        * @param {integer} index - Index of object in array of objects
        */ 
        const _task = (title, dueDate, priority, description, index) => {
                // variable to see if the task has been completed
                let _completed = false;         // if true, object is given id 'completed' to show it is completed
                return {
                        title,
                        dueDate,
                        priority,
                        description,
                        index,
                        _completed
                };
        };

        const taskTitleInput = document.getElementById('taskTitle');
        const dueDateInput = document.getElementById('dueDate');
        const description = document.getElementById('taskDescription');

        let _priority;
        let _index = -1;                // passed thru factory function, incremented with each added task
        function clickEvent(index) {return _priority = index};
        document.querySelectorAll('.priority').forEach(function(button, index) {
                button.addEventListener('click', clickEvent.bind(null, index));   
        });
        document.getElementById('confirm').addEventListener('click', () => {
                _index += 1;
                let newTask = _task(
                        taskTitleInput.value,
                        dueDateInput.value,
                        _priority,
                        description.value,
                        _index
                );
                _taskListArray = [newTask];
                document.querySelector('.taskList').appendChild(createTask(_taskListArray[newTask]));
        });
})();


taskLogic;
