import React, { Component } from 'react';

import Menu from '../Menu';
import Navbar from '../Navbar';
import Workspace from '../Workspace';

class AdminBox extends Component {
    render () {
        return (
            <div>
                <Menu />
                <Navbar />
                <Workspace />
            </div>
        );
    }
}

export default AdminBox;
