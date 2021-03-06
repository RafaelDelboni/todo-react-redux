import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import TodoItem from '../../components/todo/TodoItem';
import * as todoActions from '../../actions/todoActions';

export class TodoItemContainer extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          todo: Object.assign({}, props.todo),
          isBeingEdited: false,
          errors: {}
      };
      this.todoStateUpdate = this.todoStateUpdate.bind(this);
      this.todoStateSaveAction = this.todoStateSaveAction.bind(this);
      this.onCheckboxChange = this.onCheckboxChange.bind(this);
      this.onDoubleClick = this.onDoubleClick.bind(this);
      this.onKeyDown = this.onKeyDown.bind(this);
      this.onDelete = this.onDelete.bind(this);
  }

  todoStateUpdate(event) {
    const field = event.target.name;
    let todo = this.state.todo;
    todo[field] = event.target.value;
    this.setState({todo});
  }

  todoStateSaveAction(event) {
    event.preventDefault();
    let todo = this.state.todo;
    this.props.actions.saveTodo(todo).then(() => {
      this.setState({todo, isBeingEdited: false});
    });
  }

  onCheckboxChange(event) {
    const field = event.target.name;
    let todo = this.state.todo;
    todo[field] = event.target.type === 'checkbox' ? 
      event.target.checked : 
      event.target.value;
    this.props.actions.saveTodo(todo).then(() => {
      this.setState({ todo });
    });
  }

  onDoubleClick(event) {
    event.preventDefault();
    this.setState({
      isBeingEdited: true
    });
  }

  onKeyDown (event) {
    const KEY_ENTER = 13, KEY_ESC = 27;
    if (event.keyCode === KEY_ENTER) {
      this.todoStateUpdate(event);
      this.todoStateSaveAction(event);
    } else if (event.keyCode === KEY_ESC) {
      this.setState({
        isBeingEdited: false
      });
    }
  }

  refHandleFocus(ref) {
    if(ref)
      ref.focus();
  }

  onDelete(event) {
    event.preventDefault();
    let todo = this.state.todo;
    this.props.actions.deleteTodo(todo);
  }

  render() {
    return (
      <TodoItem state={this.state}
        onCheckboxChange={this.onCheckboxChange}
        onDoubleClick={this.onDoubleClick}
        onKeyDown={this.onKeyDown}
        refHandleFocus={this.refHandleFocus}
        onDelete={this.onDelete}
      />
    );
  }
}
  
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(todoActions, dispatch)
    };
}

TodoItemContainer.propTypes = {
    todo: PropTypes.object.isRequired,
    actions: React.PropTypes.object.isRequired
};

export default connect(null, mapDispatchToProps)(TodoItemContainer);