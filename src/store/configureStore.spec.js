import {createStore} from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as todoActions from '../actions/todoActions';

describe('Store', () => {
  it('should handle creating todos', () => {
    const store = createStore(rootReducer, initialState);
    const todo = {
      description: "First todo",
      done: false
    };

    const action = todoActions.saveTodoSuccess(todo);
    store.dispatch(action);

    const actual = store.getState().todos[0];
    const expected = {
      description: "First todo",
      done: false
    };

    expect(actual).toEqual(expected);
  });

  it('should handle updating todos', () => {
    const store = createStore(rootReducer, initialState);
    const todo = {
      _id: 2,
      description: "Second todo",
      done: false
    };

    const actionCreate = todoActions.saveTodoSuccess(todo);
    store.dispatch(actionCreate);

    const updatedTodo = {
      _id: 2,
      description: "Second todo updated",
      done: true
    };

    const actionUpdate = todoActions.updateTodoSuccess(updatedTodo);
    store.dispatch(actionUpdate);

    const actual = store.getState().todos[0];

    expect(actual).toMatchSnapshot();
  });
  
  it('should handle deleting todos', () => {
    const store = createStore(rootReducer, initialState);
    const todo = {
      _id: 3,
      description: "Third todo",
      done: true
    };

    const actionCreate = todoActions.saveTodoSuccess(todo);
    store.dispatch(actionCreate);

    const actualBefore = store.getState().todos[0];

    expect(actualBefore).toMatchSnapshot();

    const actionDelete = todoActions.deleteTodoSuccess(todo);
    store.dispatch(actionDelete);

    const actual = store.getState().todos.length;
    const expected = 0;

    expect(actual).toEqual(expected);
  });
});