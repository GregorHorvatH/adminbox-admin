// Core
import React from 'react';
import { object } from 'prop-types';

// Instruments
import Styles from './styles.scss';
import Menu from '../Menu';
import Navbar from '../Navbar';

const menu = [
    {
        icon:   'fa fa-tachometer',
        screen: 'Dashboard'
    },
    {
        icon:   'fa fa-pencil',
        screen: 'Layouts'
    },
    {
        icon:   'fa fa-calendar',
        screen: 'Calendar'
    },
    {
        icon:   'fa fa-bookmark-o',
        screen: 'UI Elements'
    },
    {
        icon:   'fa fa-comments-o',
        screen: 'Text & Forms'
    },
    {
        icon:   'fa fa-envelope-o',
        screen: 'Email'
    },
    {
        icon:   'fa fa-plug',
        screen: 'Icon Set'
    },
    {
        icon:   'fa fa-table',
        screen: 'Data Tables'
    },
    {
        icon:   'fa fa-bar-chart',
        screen: 'Charts'
    },
    {
        icon:   'fa fa-map-o',
        screen: 'Maps'
    },
    {
        icon:   'fa fa-user-o',
        screen: 'Profile'
    },
    {
        icon:   'fa fa-unlock-alt',
        screen: 'Login Page'
    }
];

const AdminBox = ({ children, location }) => {
    let path = location && location.pathname
        ? location.pathname.replace('/', '')
        : '';

    path = path ? path[0].toUpperCase() + path.slice(1) : 'Dashboard';

    return (
        <div>
            <Menu items = { menu } />
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
    children: object,
    location: object
};

export default AdminBox;
