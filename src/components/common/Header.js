import React, {PropTypes}  from 'react';
import { Link, IndexLink } from 'react-router';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {loading} = this.props;
    return (
      <div>
        <IndexLink to="/">All</IndexLink>
        {' | '}
        <Link to="/active">Active</Link>
        {' | '}
        <Link to="/completed">Completed</Link>
        {loading && ' Loading...'}
      </div>
    );
  }
}

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;