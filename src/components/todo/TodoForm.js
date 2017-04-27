import React from 'react';

const TodoForm = ({todo, error, onKeyPress, onChange, onSave}) => {
    return (
      <div className="input-field">
        <input className="add-todo"
          type="text"
          name="description"
          label="Todo"
          placeholder="Add new todo..."
          value={todo.description}
          onKeyPress={onKeyPress}
          onChange={onChange} />
        <input type="submit"
          value="Add"
          className="add-button btn add"
          onClick={onSave} />
        {error && <div>{error}</div>}
        </div>
    );
};

TodoForm.propTypes = {
    todo: React.PropTypes.object.isRequired,
    error: React.PropTypes.string,
    onKeyPress: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onSave: React.PropTypes.func.isRequired
};

export default TodoForm;