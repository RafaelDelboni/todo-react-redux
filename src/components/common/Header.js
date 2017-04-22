import React from 'react';
import { Link, IndexLink } from 'react-router';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class Header extends React.Component {
  render() {
    return (
      <div>
        <IndexLink to="/">All</IndexLink>
        {' | '}
        <Link to="/active">Active</Link>
        {' | '}
        <Link to="/completed">Completed</Link>
      </div>
    );
  }
}

export default Header;