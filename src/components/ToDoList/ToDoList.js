// Core
import React, { Component } from 'react';
import Ionicon from 'react-ionicons';

import CheckBox from '../CheckBox';
import Styles from './styles.scss';

class ToDoList extends Component {
    state = {
        searchInFocus: false,
        inputInFocus:  false,
        selectAll:     false
    };

    _handleSearchFocus = () => {
        this.setState({
            searchInFocus: true
        });
    };

    _handleSearchBlur = () => {
        this.setState({
            searchInFocus: false
        });
    };

    _handleInputFocus = () => {
        this.setState({
            inputInFocus: true
        });
    };

    _handleInputBlur = () => {
        this.setState({
            inputInFocus: false
        });
    };

    _handleSelectAllClick = () => {
        this.setState({
            selectAll: !this.state.selectAll
        });
    };

    render () {
        return (
            <section className = { Styles.toDoList }>
                <div className = { Styles.header }>
                    <div className = { Styles.left }>
                        <span>To Do List</span>
                    </div>
                    <div
                        className = { [
                            Styles.right,
                            this.state.searchInFocus
                                ? Styles.focused
                                : {}].join(' ')
                        }>
                        <div className = { Styles.searchWrapper }>
                            <input
                                className = { Styles.searchInput }
                                placeholder = 'Search'
                                type = 'text'
                                onBlur = { this._handleSearchBlur }
                                onFocus = { this._handleSearchFocus }
                            />
                            <Ionicon className = { Styles.searchIcon } color = '#768387' icon = 'ios-search' />
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
                    <div className = { Styles.selectAll } onClick = { this._handleSelectAllClick } >
                        <CheckBox isChecked = { this.state.selectAll } />
                        <span>Select all</span>
                    </div>
                    <div
                        className = { [
                            Styles.right,
                            this.state.inputInFocus
                                ? Styles.focused
                                : {}
                        ].join(' ') }>
                        <div className = { Styles.searchWrapper }>
                            <input
                                className = { Styles.searchInput }
                                placeholder = 'Write here'
                                type = 'text'
                                onBlur = { this._handleInputBlur }
                                onFocus = { this._handleInputFocus }
                            />
                        </div>
                        <button className = { Styles.addButton } >+ Add Task</button>
                    </div>
                </div>
            </section>
        );
    }
}

export default ToDoList;
