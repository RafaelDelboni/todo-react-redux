import * as types from './actionTypes';
import todoApi from '../api/mockTodoApi';

export function loadTodosSuccess(todos) {
    return {
        type: types.LOAD_TODOS_SUCCESS,
        todos
    };
}

export function updateTodoSuccess(todo) {
    return {
        type: types.UPDATE_TODO_SUCCESS,
        todo
    };
}

export function saveTodoSuccess(todo) {
    return {
        type: types.CREATE_TODO_SUCCESS,
        todo
    };
}

export function deleteTodoSuccess(todo) {
    return {
        type: types.DELETE_TODO_SUCCESS,
        todo
    };
}

/* eslint-disable no-console */
export function loadTodos() {
    return function (dispatch) { // thunk
      return todoApi.getAllTodos().then(todos => {
          dispatch(loadTodosSuccess(todos));
      }).catch(error => {
          console.error("An error occured:", error);
          throw(error);
      });
    };
}

export function saveTodo(todo) {
    return function(dispatch) { // thunk
        return todoApi.saveTodo(todo).then(savedTodo => {
            todo._id ? dispatch(updateTodoSuccess(savedTodo)) : dispatch(saveTodoSuccess(savedTodo));
            return savedTodo;
        }).catch(error => {
            throw(error);
        });
    };
}

export function deleteTodo(todo) {
    return function(dispatch) { // thunk
        return todoApi.deleteTodo(todo).then(deletedTodo => {
            dispatch(deleteTodoSuccess(deletedTodo));
            return deletedTodo;
        }).catch(error => {
            throw(error);
        });
    };
}