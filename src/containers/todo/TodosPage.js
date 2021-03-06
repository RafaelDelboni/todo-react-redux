import React from 'react';
import {connect} from 'react-redux';

import TodoFormContainer from './TodoFormContainer';
import TodoList from '../../components/todo/TodoList';

export class TodosPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const todos = filterTodos(this.props);
    return (
			<div className="body-flex-item">
				<div className="add-new-todo shadow">
					<div className="add-title">Todos</div>
					<TodoFormContainer/>
				</div>
        <TodoList todos={todos}/>
      </div>
    );
  }
}

TodosPage.propTypes = {
    todos: React.PropTypes.array.isRequired,
    actions: React.PropTypes.object
};

const filterTodos = (props) => {
  switch(props.params.filter) {
    case 'active':
      return props.todos.filter((t) => t.done === false);
    case 'completed':
      return props.todos.filter((t) => t.done === true);
    default:
      return props.todos;
  }
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps)(TodosPage);