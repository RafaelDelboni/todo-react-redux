import todoReducer from './todoReducer';
import * as actions from '../actions/todoActions';

describe('Todo Reducer', () => {
  it('should add todo when passed CREATE_TODO_SUCCESS', () => {
    // arrange
    const initialState = [
      {description: 'A'},
      {description: 'B'}
    ];

    const newTodo = {description: 'C'};
    const action = actions.saveTodoSuccess(newTodo);

    // act
    const newState = todoReducer(initialState, action);

    // assert
    expect(newState.length).toEqual(3);
    expect(newState[0].description).toEqual('A');
    expect(newState[1].description).toEqual('B');
    expect(newState[2].description).toEqual('C');
  });

  it('should update todo when passed UPDATE_TODO_SUCCESS', () => {
    // arrange
    const initialState = [
      {_id: 'A', description: 'A'},
      {_id: 'B', description: 'B'},
      {_id: 'C', description: 'C'}
    ];

    const todo = {_id: 'B', description: 'Updated Description'};
    const action = actions.updateTodoSuccess(todo);

    // act
    const newState = todoReducer(initialState, action);
    const updatedTodo = newState.find((a) => a._id === todo._id);
    const untouchedTodo = newState.find((a) => a._id === 'A');

    // assert
    expect(updatedTodo.description).toEqual('Updated Description');
    expect(untouchedTodo.description).toEqual('A');
    expect(newState.length).toEqual(3);
  });

  it('should delete todo when passed DELETE_TODO_SUCCESS', () => {
    // arrange
    const initialState = [
      {_id: 'A', description: 'A'},
      {_id: 'B', description: 'B'},
      {_id: 'C', description: 'C'}
    ];

    const todo = {_id: 'B'};
    const action = actions.deleteTodoSuccess(todo);

    // act
    const newState = todoReducer(initialState, action);
    
    // assert
    expect(newState.length).toEqual(2);
    expect(newState[0].description).toEqual('A');
    expect(newState[1].description).toEqual('C');
  });
});
