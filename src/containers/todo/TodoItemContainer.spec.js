import React from 'react';
import {mount} from 'enzyme';
import {TodoItemContainer} from './TodoItemContainer';

describe('TodoItemContainer', () => {
  it('should update todo and call saveTodo when checkbox is changed', () => {
    const promisse = Promise.resolve();
    const props = {
      todo: {_id: 1, description: 'todo', done: true},
      actions: {
        saveTodo: jest.fn(() => promisse)
      }
    };

    const wrapper = mount(<TodoItemContainer {...props} />);
    const checkBox = wrapper.find('input');

    expect(checkBox.prop('type')).toBe('checkbox');
    checkBox.simulate('change',{target: {type: 'checkbox', name: 'done', checked: false}});
    expect(props.actions.saveTodo).toBeCalled();
    promisse.then(()=> {
      expect(wrapper.state().todo).toEqual({_id: 1, description: 'todo', done: false});
    });
  });

  it('should change state isBeingEdited when label is double clicked', () => {
    const props = {
      todo: {_id: 1, description: 'todo', done: true},
      actions: {}
    };

    const wrapper = mount(<TodoItemContainer {...props} />);
    const label = wrapper.find('label');

    expect(wrapper.state().isBeingEdited).toBe(false);
    label.simulate('doubleclick');
    expect(wrapper.state().isBeingEdited).toBe(true);
  });

  it('should save when enter is pressed', () => {
    const promisse = Promise.resolve();
    const props = {
      todo: {_id: 1, description: 'todo', done: true},
      actions: {
        saveTodo: jest.fn(() => promisse)
      }
    };

    const wrapper = mount(<TodoItemContainer {...props} />);
    wrapper.setState({isBeingEdited: true});
    const input = wrapper.find('input[type="text"]').last();
    input.node.value = 'edited';
    input.simulate('keyDown', {keyCode: 13});

    expect(props.actions.saveTodo).toBeCalled();
    expect(wrapper.state().isBeingEdited).toBe(true);
    promisse.then(()=> {
      expect(wrapper.state().todo).toEqual({_id: 1, description: 'edited', done: true});
      expect(wrapper.state().isBeingEdited).toBe(false);
    });
  });

  it('should exit edit mode and change state isBeingEdited to false when esc is pressed', () => {
    const props = {
      todo: {_id: 1, description: 'todo', done: true},
      actions: {}
    };

    const wrapper = mount(<TodoItemContainer {...props} />);
    wrapper.setState({isBeingEdited: true});
    const input = wrapper.find('input[type="text"]').last();
    input.simulate('keyDown', {keyCode: 27});

    expect(wrapper.state().isBeingEdited).toBe(false);
  });

  it('should call deleteTodo when delete button is clicked', () => {
    const props = {
      todo: {_id: 1, description: 'todo', done: true},
      actions: {
        deleteTodo: jest.fn()
      }
    };

    const wrapper = mount(<TodoItemContainer {...props} />);
    const button = wrapper.find('button');
    button.simulate('click');
    expect(props.actions.deleteTodo).toBeCalled();
  });
 });