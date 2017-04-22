import React from 'react';
import TodoItemContainer from '../../containers/todo/TodoItemContainer';

const TodoList = (props) => {
    return (
      <div>
        <ul>
          {props.todos.map(todo =>
            <TodoItemContainer key={todo._id} todo={todo} />
          )}
        </ul>
      </div>
    );
  };

TodoList.propTypes = {
    todos: React.PropTypes.array.isRequired
};

export default TodoList;