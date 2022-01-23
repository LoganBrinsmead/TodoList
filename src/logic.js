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
    const content = document.querySelector(`${selector}`);
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
}

// factory function for creating task in the DOM
// takes necessary info from the task factory function
function createTask() {
    // when this function is called, create a new function using the task factory function
    const newTask = task(title, dueDate, priority, description);

    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');
    
}

function date() {
    // the current date 
    const date = new Date();

    return date;
}

// factory function to create the To-Do objects
const task = (title, dueDate, priority, description) => {
    return {
        title,
        dueDate,
        priority,
        description
    };
};

