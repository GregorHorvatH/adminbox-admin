// Core
import React from 'react';
import { object } from 'prop-types';

// Instruments
import Styles from './styles.scss';
import Menu from '../Menu';
import Navbar from '../Navbar';

const AdminBox = ({ children, location }) => {

    let path = location.pathname.replace('/', '') || 'Dashboard';

    path = path[0].toUpperCase() + path.slice(1);

    return (
        <div>
            <Menu />
            <Navbar />
            <section className = { Styles.workspace }>
                <div className = { Styles.header } >
                    <span className = { Styles.left } >{ path }</span>
                    <span className = { Styles.right } >{`Home / ${path}`}</span>
                </div>
                <div className = { Styles.widgets }>
                    { children }
                </div>
            </section>
        </div>
    );
};

AdminBox.propTypes = {
    location: object.isRequired,
    children: object
};

export default AdminBox;
