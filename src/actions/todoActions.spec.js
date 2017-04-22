import * as todoActions from './todoActions';
import * as ActionTypes from './actionTypes';

function mockActionsTodo (todo) {
  return new Promise((resolve) => {
    resolve(todo);
  });
}

jest.mock('../api/mockTodoApi', () => {
  return {
    saveTodo: mockActionsTodo,
    deleteTodo: mockActionsTodo
  };
});

// Test a sync action
describe('Todo Actions', () => {
  describe('createTodoSuccess', () => {
    
    it('should create a CREATE_TODO_SUCCESS action', () => {
      const dispatch = jest.fn();
      const mockTodo = {description: 'mocktodo', done: false};
      const expected = Object.assign(
        {todo: mockTodo}, 
        {type: ActionTypes.CREATE_TODO_SUCCESS}
      );

      // we expect this to return a function since it is a thunk
      expect(typeof (todoActions.saveTodo(mockTodo))).toEqual('function');
      
      // then we simulate calling it with dispatch as the store would do
      todoActions.saveTodo(mockTodo)(dispatch).then(() => {
        // finally assert that the dispatch was called with our expected action
        expect(dispatch).toBeCalledWith(expected);
      });
    });

    it('should create a UPDATE_TODO_SUCCESS action', () => {
      const dispatch = jest.fn();
      const mockTodo = {_id: 1, description: 'mocktodo', done: false};
      const expected = Object.assign(
        {todo: mockTodo}, 
        {type: ActionTypes.UPDATE_TODO_SUCCESS}
      );

      // we expect this to return a function since it is a thunk
      expect(typeof (todoActions.saveTodo(mockTodo))).toEqual('function');
      // then we simulate calling it with dispatch as the store would do
      todoActions.saveTodo(mockTodo)(dispatch).then(() => {
        // finally assert that the dispatch was called with our expected action
        expect(dispatch).toBeCalledWith(expected);
      });
    });

    it('should create a DELETE_TODO_SUCCESS action', () => {
      const dispatch = jest.fn();
      const mockTodo = {_id: 1, description: 'mocktodo', done: false};
      const expected = Object.assign(
        {todo: mockTodo}, 
        {type: ActionTypes.DELETE_TODO_SUCCESS}
      );

      // we expect this to return a function since it is a thunk
      expect(typeof (todoActions.deleteTodo(mockTodo))).toEqual('function');
      // then we simulate calling it with dispatch as the store would do
      todoActions.deleteTodo(mockTodo)(dispatch).then(() => {
        // finally assert that the dispatch was called with our expected action
        expect(dispatch).toBeCalledWith(expected);
      });
    });

  });
});