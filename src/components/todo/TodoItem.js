import React, {PropTypes} from 'react';

const TodoItem = ({state, onCheckboxChange, onDoubleClick, onKeyDown, refHandleFocus, onDelete}) => {
    return (
      <li>
        <div>
          <input
            type="checkbox"
            name="done"
            checked={state.todo.done}
            onChange={onCheckboxChange}
          />
          { state.isBeingEdited ?
            <input
              ref={refHandleFocus}
              type="text"
              name="description"
              defaultValue={state.todo.description}
              onKeyDown={onKeyDown}
            /> 
          :
            <label 
              name="description"
              onDoubleClick={onDoubleClick}>
              {state.todo.description}
            </label>
          }
          <button
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