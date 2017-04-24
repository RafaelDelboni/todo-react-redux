import React from 'react';
import {mount} from 'enzyme';
import {TodosPage} from './TodosPage';

jest.mock('./TodoFormContainer', () => 'TodoFormContainer');
jest.mock('./TodoItemContainer');

describe('TodosPage', () => {
  const todos = [
    {_id: 1, description: 'todo 1', done: false},
    {_id: 2, description: 'todo 2', done: true},
    {_id: 3, description: 'todo 3', done: false}
  ];
  it('should show all todos when no filter is passed', () => {
    const props = {
      params: {},
      todos
    };

    const wrapper = mount(<TodosPage {...props} />);
    const TodoList = wrapper.find('TodoList');
    expect(TodoList.node.props.todos.length).toBe(3);
  });

  it('should show only actives todos when active filter is passed', () => {
    const props = {
      params: {
        filter: 'active'
      },
      todos
    };

    const wrapper = mount(<TodosPage {...props} />);
    const TodoList = wrapper.find('TodoList');
    expect(TodoList.node.props.todos.length).toBe(2);
  });

  it('should show only completed todos when active completed is passed', () => {
    const props = {
      params: {
        filter: 'completed'
      },
      todos
    };

    const wrapper = mount(<TodosPage {...props} />);
    const TodoList = wrapper.find('TodoList');
    expect(TodoList.node.props.todos.length).toBe(1);
  });
});