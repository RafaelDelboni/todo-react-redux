import React, {PropTypes} from 'react';
import Header from '../components/common/Header';

class App extends React.Component {
    render() {
        // children will be passed by React Router //
        return (
            <div>
                <Header />
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;