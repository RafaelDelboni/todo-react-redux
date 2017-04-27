import React, {PropTypes}  from 'react';
import { Link, IndexLink } from 'react-router';
import TopBarProgress from "react-topbar-progress-indicator";

TopBarProgress.config({
  barThickness: 2,
  barColors: {
    "0": "#4CC8FF",
    "0.5": "#00B1FF",
    "1.0": "#26647F",
  },
  shadowBlur: 5,
});

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {loading} = this.props;
    return (
			<div className="head-flex-item">
				<ul className="tabs">
					<li className="tab"><IndexLink to="/" activeClassName="active">All</IndexLink></li>
					<li className="tab"><Link to="/active" activeClassName="active">Active</Link></li>
					<li className="tab"><Link to="/completed" activeClassName="active">Completed</Link></li>
				</ul>	
        {loading && <TopBarProgress />}
			</div>
    );
  }
}

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;