import React, {PropTypes} from 'react';

const TodoItem = ({state, onCheckboxChange, onDoubleClick, onKeyDown, refHandleFocus, onDelete}) => {
    return (
      <li className="li-container shadow">
        <div className="todo-container">
          <input
            id={`done-${state.todo._id}`}
            type="checkbox"
            name="done"
            checked={state.todo.done}
            onChange={onCheckboxChange}
          />
          <label 
            className="todo-checkbox" 
            htmlFor={`done-${state.todo._id}`}
          />
          { state.isBeingEdited ?
            <input
              className="todo-input" 
              ref={refHandleFocus}
              type="text"
              name="description"
              defaultValue={state.todo.description}
              onKeyDown={onKeyDown}
            /> 
          :
            <div 
              name="description" 
              className="todo-input" 
              onDoubleClick={onDoubleClick}>
              {state.todo.description}
            </div>
          }
          <button
            className="todo-delete btn remove"
            onClick={onDelete}>
            x
          </button>
        </div>
      </li>
    );
};

TodoItem.propTypes = {
    state: PropTypes.object.isRequired,
    onCheckboxChange: PropTypes.func.isRequired,
    onDoubleClick: PropTypes.func.isRequired,
    onKeyDown: PropTypes.func.isRequired,
    refHandleFocus: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default TodoItem;