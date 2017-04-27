import React, {PropTypes} from 'react';
import Header from '../components/common/Header';
import {connect} from 'react-redux';

class App extends React.Component {
  render() {
    // children will be passed by React Router //
    return (
      <div className="flex-container">
        <Header loading={this.props.loading} />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);