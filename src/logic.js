// This module is for the logic of the To-Do List
// i.e. creating To-Do List item factory functions, saving the items locally, utilizing the date-fns, etc.
import {format, formatDistance, formatRelative, subDays} from 'date-fns';

function dateFormat() {
    format(new Date())
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


export { task };