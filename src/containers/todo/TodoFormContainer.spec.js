import React from 'react';
import {mount} from 'enzyme';
import {TodoFormContainer} from './TodoFormContainer';

describe('TodoFormContainer', () => {
  it('sets error message when trying to save', () => {
    const errorPromise = Promise.reject('Fake error message.');

    const props = {
      todo: {_id: '', description: '', done: false},
      error: '',
      actions: {
        saveTodo: () => errorPromise
      }
    };

    const wrapper = mount(<TodoFormContainer {...props} />);
    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');
    saveButton.simulate('click');

    errorPromise.catch(() => {}).then(()=>{
      expect(wrapper.state().error).toBe('Fake error message.');
    });
  });
  
  it('sets clear state todo after successful save', () => {
    const promise = Promise.resolve();
    const props = {
      todo: {_id: '', description: 'todo', done: true},
      error: '',
      actions: {
        saveTodo: () => promise
      }
    };

    const wrapper = mount(<TodoFormContainer {...props} />);
    expect(wrapper.state().todo).toEqual(props.todo);

    const saveButton = wrapper.find('input').last();
    expect(saveButton.prop('type')).toBe('submit');
    saveButton.simulate('click');

    promise.then(() => {
      expect(wrapper.state().todo).toEqual({_id: '', description: '', done: false});
    });
  });
});