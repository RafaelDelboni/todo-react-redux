import React from 'react';

const TodoForm = ({todo, error, onKeyPress, onChange, onSave}) => {
    return (
      <div>
        <input type="text"
          name="description"
          label="Todo"
          value={todo.description}
          onKeyPress={onKeyPress}
          onChange={onChange} />
        <input type="submit"
          value="Add Todo"
          className="btn btn-primary"
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