import React from 'react';

const TodoForm = ({state, onKeyPress, onChange, onSave}) => {
    return (
      <div>
        <input type="text"
          name="description"
          label="Todo"
          value={state.todo.description}
          onKeyPress={onKeyPress}
          onChange={onChange} />
        <input type="submit"
          value="Add Todo"
          className="btn btn-primary"
          onClick={onSave} />
        </div>
    );
};

TodoForm.propTypes = {
    state: React.PropTypes.object.isRequired,
    onKeyPress: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onSave: React.PropTypes.func.isRequired
};

export default TodoForm;