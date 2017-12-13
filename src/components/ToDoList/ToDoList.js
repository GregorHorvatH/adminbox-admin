// Core
import React from 'react';
import Ionicon from 'react-ionicons';

import CheckBox from '../CheckBox';
import Styles from './styles.scss';

const ToDoList = () => {
    return (
        <section className = { Styles.toDoList }>
            <div className = { Styles.header }>
                <div className = { Styles.left }>
                    <span>To Do List</span>
                </div>
                <div className = { Styles.right }>
                    <div className = { Styles.searchWrapper }>
                        <input
                            className = { Styles.searchInput }
                            placeholder = 'Search'
                            type = 'text'
                        />
                        <Ionicon color = '#768387' icon = 'ios-search' />
                    </div>
                    <Ionicon className = { Styles.icon } color = '#768387' icon = 'ios-arrow-down' />
                    <Ionicon className = { Styles.icon } color = '#768387' icon = 'ios-settings' />
                    <Ionicon className = { Styles.icon } color = '#768387' icon = 'md-close' />
                </div>
            </div>
            <div className = { Styles.body }>
                <span>To Do List</span>
            </div>
            <div className = { Styles.footer }>
                <div className = { Styles.selectAll }>
                    <CheckBox />
                    <span>Select all</span>
                </div>
            </div>
        </section>
    );
};

export default ToDoList;
