const todosDb = [];

const generateId = () => {
    let d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
        d += performance.now();
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
};

const getAllTodos = () => {
  return new Promise((resolve) => {
    resolve(Object.assign([], todosDb));
  });
};

const saveTodo = (todo) => {
  return new Promise((resolve, reject) => {
    todo = Object.assign({}, todo); // to avoid manipulating object passed in.
    // Simulate server-side validation
    const minTodoDescriptionLength = 1;
    if (todo.description.length < minTodoDescriptionLength) {
      reject(`Description must be at least ${minTodoDescriptionLength} characters.`);
    }
    if (todo._id) {
      const existingTodoIndex = todosDb.findIndex(t => t._id == todo._id);
      todosDb.splice(existingTodoIndex, 1, todo);
    } else {
      //Cloning so copy returned is passed by value rather than by reference.
      todo._id = generateId();
      todosDb.push(todo);
    }
    resolve(todo);
  });
};

const deleteTodo = (todo) => {
  return new Promise((resolve, reject) => {
    todo = Object.assign({}, todo); // to avoid manipulating object passed in.
    // Simulate server-side validation
    if (!todo || !todo._id) {
      reject('Invalid todo.');
    }
    todosDb.filter((t) => t._id !== todo._id);
    resolve(todo);
  });
};

const sleep = (promise, args) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  }).then(() => {
    return promise(args);
  });
};

module.exports = {
  getAllTodos: sleep.bind(this, getAllTodos),
  saveTodo: sleep.bind(this, saveTodo),
  deleteTodo: sleep.bind(this, deleteTodo)
};
