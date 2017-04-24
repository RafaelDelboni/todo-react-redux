import * as todoActions from './todoActions';
import * as ActionTypes from './actionTypes';

let triggerResolve = true;
function mockActionsTodo (result) {
  return new Promise((resolve, reject) => {
    if (triggerResolve)
      resolve(result);
    else
      reject(result);
  });

}
jest.mock('../api/todoApi.fake', () => {
  return {
    getAllTodos: mockActionsTodo,
    saveTodo: mockActionsTodo,
    deleteTodo: mockActionsTodo
  };
});

// Test a sync action
describe('Todo Actions', () => {
  describe('Success', () => {
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
  describe('Error', () => {
    it('should create a DELETE_TODO_ERROR action', () => {
      triggerResolve = false;
      const dispatch = jest.fn();
      const mockTodo = {_id: 1, description: 'mocktodo', done: false};
      const expected = Object.assign(
        {error: mockTodo},
        {type: ActionTypes.DELETE_TODO_ERROR}
      );

      // we expect this to return a function since it is a thunk
      expect(typeof (todoActions.deleteTodo(mockTodo))).toEqual('function');

      // then we simulate calling it with dispatch as the store would do
      todoActions.deleteTodo(mockTodo)(dispatch).then(() => {
        // finally assert that the dispatch was called with our expected action
        expect(dispatch).toBeCalledWith(expected);
      });
    });

    it('should create a CREATE_UPDATE_TODO_ERROR action', () => {
      triggerResolve = false;
      const dispatch = jest.fn();
      const mockTodo = {_id: 1, description: 'mocktodo', done: false};
      const expected = Object.assign(
        {error: mockTodo},
        {type: ActionTypes.CREATE_UPDATE_TODO_ERROR}
      );

      // we expect this to return a function since it is a thunk
      expect(typeof (todoActions.saveTodo(mockTodo))).toEqual('function');
      // then we simulate calling it with dispatch as the store would do
      todoActions.saveTodo(mockTodo)(dispatch).then(() => {
        // finally assert that the dispatch was called with our expected action
        expect(dispatch).toBeCalledWith(expected);
      });
    });

    it('should create a LOAD_TODOS_ERROR action', () => {
      triggerResolve = false;
      const dispatch = jest.fn();
      const expected = Object.assign(
        {error: undefined},
        {type: ActionTypes.LOAD_TODOS_ERROR}
      );

      // we expect this to return a function since it is a thunk
      expect(typeof (todoActions.loadTodos())).toEqual('function');
      // then we simulate calling it with dispatch as the store would do
      todoActions.loadTodos()(dispatch).then(() => {
        // finally assert that the dispatch was called with our expected action
        expect(dispatch).toBeCalledWith(expected);
      });
    });

  });
});
