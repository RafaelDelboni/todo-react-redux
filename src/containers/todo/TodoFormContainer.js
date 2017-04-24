import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import TodoForm from '../../components/todo/TodoForm';
import * as todoActions from '../../actions/todoActions';

export class TodoFormContainer extends React.Component {
  constructor(props, context) {
      super(props, context);

      this.state = {
          todo: Object.assign({}, 
            props.todo
          ),
          error: ''
      };
      this.onChange = this.onChange.bind(this);
      this.onSave = this.onSave.bind(this);
      this.onKeyPress = this.onKeyPress.bind(this);
  }

  onChange(event) {
    const field = event.target.name;
    let todo = this.state.todo;
    todo[field] = event.target.value;
    this.setState({ todo });
  }
  
  onSave(event) {
    event.preventDefault();
    this.props.actions.saveTodo(this.state.todo).then(() => {
      this.setState({ todo: Object.assign({}, {_id: '', description: '', done: false}) });
    }).catch(error => {
      this.setState({error: error});
    });
  }

  onKeyPress (event) {
    if (event.key === 'Enter') {
      this.onSave(event);
    }
  }

  render() {
    return (
      <TodoForm 
        todo={this.state.todo}
        error={this.state.error}
        onKeyPress={this.onKeyPress}
        onChange={this.onChange}
        onSave={this.onSave}
      />
    );
  }
}

function mapStateToProps(state) {
  let initialTodo = state.todo || {_id:'', description:'', done: false};
  return {
    todo: initialTodo
  };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(todoActions, dispatch)
    };
}

TodoFormContainer.propTypes = {
    todo: React.PropTypes.object,
    actions: React.PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoFormContainer);