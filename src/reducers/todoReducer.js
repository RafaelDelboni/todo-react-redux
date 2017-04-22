import * as types from '../actions/actionTypes';
import initialState from './initialState';

const compareById = (a,b) => {
  if (a._id < b._id)
    return -1;
  if (a._id > b._id)
    return 1;
  return 0;
};

export default function todoReducer(state = initialState.todos , action) { 
    switch(action.type) {
        case types.LOAD_TODOS_SUCCESS:
            return action.todos.sort(compareById);
        case types.CREATE_TODO_SUCCESS:
            return [
                ...state, 
                Object.assign({}, action.todo)
            ].sort(compareById);
        case types.UPDATE_TODO_SUCCESS:
            return [
                ...state.filter((todo) => todo._id !== action.todo._id),
                Object.assign({}, action.todo)
            ].sort(compareById);
        case types.DELETE_TODO_SUCCESS:
            return [
                ...state.filter((todo) => todo._id !== action.todo._id)
            ].sort(compareById);
        default:
            return state;
    }
}

