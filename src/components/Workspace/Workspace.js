// Core
import React from 'react';

import Styles from './styles.scss';
import ToDoList from '../ToDoList';

const Workspace = () => (
    <section className = { Styles.workspace }>
        <div className = { Styles.header } >
            <span className = { Styles.left } >Dashboard</span>
            <span className = { Styles.right } >Home / Dashboard</span>
        </div>
        <div className = { Styles.widgets }>
            <ToDoList />
        </div>
    </section>
);

export default Workspace;
