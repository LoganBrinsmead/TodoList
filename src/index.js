console.log("Hello, World?");

// This module is for the logic of the To-Do List
// i.e. creating To-Do List item factory functions, saving the items locally, utilizing the date-fns, etc.
import {format, formatDistance, formatRelative, subDays} from 'date-fns';


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



// function to clear the DOM 
function clearDOM(selector) {
    const content = document.querySelector(`'${selector}'`);
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
}

// factory function for creating task in the DOM
// takes necessary info from the task factory function
function createTaskObj() {
        const _taskTitleInput = document.getElementById('taskTitle');
        const _dueDateInput = document.getElementById('dueDate');
        const _description = document.getElementById('taskDescription');

        return newTask;
}

function taskDOM(obj) {
        // create a task list item in memory
        const task = document.createElement('li');

         
}

function date() {
    // the current date 
    const date = new Date();

    return date;
}

let _priority;
function clickEvent(index) {return _priority = index};
document.querySelectorAll('.priority').forEach(function(button, index) {
        button.addEventListener('click', clickEvent.bind(null, index));   
});
document.getElementById('confirm').addEventListener('click', () => {
        const newTask = task(
                _taskTitleInput.value,
                _dueDateInput.value,
                _priority,
                _description.value
        );
        return newTask;
});


// factory function to create the To-Do objects
const task = (title, dueDate, priority, description) => {
    return {
        title,
        dueDate,
        priority,
        description
    };
};

createTask();