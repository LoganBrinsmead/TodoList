// // This module is meant for manipulating the DOM elements of the page

// function taskDOM(obj) {
//     // create a task list item in memory, give it a class of task
//     const task = document.createElement('li');
//     task.classList.add('task');

//     // create the checkbox, give it complete class
//     const checkbox = document.createElement('input');
//     checkbox.type = 'checkbox';
//     checkbox.classList.add('complete');

//     // create div for the name of the task, give it the taskName class
//     const taskName = document.createElement('div');
//     taskName.textContent = obj.title;

//     // create the edit button, give it the editTask class
//     const editButton = document.createElement('button');
//     editButton.textContent = 'Edit';
//     editButton.classList.add('editTask');

//     // create the delete task button, give it the deleteTask class
//     const deleteButton = document.createElement('button');
//     deleteButton.textContent = 'Delete';
//     deleteButton.classList.add('deleteTask');

//     // append the elements
//     task.appendChild(checkbox);
//     task.appendChild(taskName);
//     task.appendChild(editButton);
//     task.appendChild(deleteButton);

//     return task;
// }

// // function to clear the DOM 
// function clearDOM(selector) {
//     const content = document.querySelector(`'${selector}'`);
//     while (content.firstChild) {
//         content.removeChild(content.lastChild);
//     }
// }


// export { taskDOM, clearDOM };