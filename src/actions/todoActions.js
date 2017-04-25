import * as types from './actionTypes';
import todoApi from '../api/todoApi.fake';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

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

export function loadTodosError(error) {
  return {
    type: types.LOAD_TODOS_ERROR,
    error
  };
}

export function saveTodoError(error) {
  return {
    type: types.CREATE_UPDATE_TODO_ERROR,
    error
  };
}

export function deleteTodoError(error) {
  return {
    type: types.DELETE_TODO_ERROR,
    error
  };
}

export function loadTodos() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return todoApi.getAllTodos().then(todos => {
      dispatch(loadTodosSuccess(todos));
    }).catch(error => {
      dispatch(loadTodosError(error));
      dispatch(ajaxCallError());
    });
  };
}

export function saveTodo(todo) {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return todoApi.saveTodo(todo).then(savedTodo => {
      todo._id ? dispatch(updateTodoSuccess(savedTodo)) : dispatch(saveTodoSuccess(savedTodo));
      return savedTodo;
    }).catch(error => {
      dispatch(saveTodoError(error));
      dispatch(ajaxCallError());
    });
  };
}

export function deleteTodo(todo) {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return todoApi.deleteTodo(todo).then(deletedTodo => {
      dispatch(deleteTodoSuccess(deletedTodo));
      return deletedTodo;
    }).catch(error => {
      dispatch(deleteTodoError(error));
      dispatch(ajaxCallError());
    });
  };
}
