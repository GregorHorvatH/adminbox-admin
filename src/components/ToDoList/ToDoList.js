// Core
import React, { Component } from 'react';
import Ionicon from 'react-ionicons';

// Instruments
import Styles from './styles.scss';
import { getUniqueID } from '../../helpers';
import CheckBox from '../CheckBox';
import ToDoItem from '../ToDoItem';
import PopUp from '../PopUp';

const SORT = [
    {
        name: 'none',
        icon: 'fa fa-sort',
        func: () => 0
    },
    {
        name: 'asc',
        icon: 'fa fa-chevron-down',
        func: (a, b) => {
            if (a.text < b.text) {
                return -1;
            }
            if (a.text > b.text) {
                return 1;
            }

            return 0;
        }
    },
    {
        name: 'desc',
        icon: 'fa fa-chevron-up',
        func: (a, b) => {
            if (a.text > b.text) {
                return -1;
            }
            if (a.text < b.text) {
                return 1;
            }

            return 0;
        }
    }
];

class ToDoList extends Component {
    state = {
        toDoList:      [],
        text:          '',
        searchInFocus: false,
        inputInFocus:  false,
        selectAll:     false,
        filter:        '',
        sort:          0,
        showPopUp:     false
    };

    componentWillMount () {
        this.setState({
            toDoList: [
                { 'id': '5ak0VgS277sLCIC', 'text': 'task 1', 'selected': false, 'isLiked': true },
                { 'id': 'jM0GTuEBB2NXYrE', 'text': 'task 2', 'selected': true, 'isLiked': false },
                { 'id': 't4IrIYFfXn1Dh2g', 'text': 'task 3', 'selected': false, 'isLiked': false }
            ]
        });
    }

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

    _handleSearchChange = (event) => {
        this.setState({
            filter: event.target.value
        });
    }

    _handleSearchClear = () => {
        this.setState({ filter: '' });
    }

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

    _handleInputChange = (event) => {
        this.setState({
            text: event.target.value
        });
    }

    _handleSelectAllClick = () => {
        if (!this.state.toDoList.length) {
            return;
        }

        this.setState(({ selectAll, toDoList }) => ({
            selectAll: !selectAll,
            toDoList:  toDoList.map((item) => ({
                ...item,
                selected: !selectAll
            }))
        }));
    };

    _handleAddItemPress = (event) => {
        event.preventDefault();
        if (!this.state.text) {
            return;
        }

        this.setState(({ toDoList, text }) => ({
            toDoList: [
                {
                    id:       getUniqueID(),
                    isLiked:  false,
                    text,
                    selected: false
                },
                ...toDoList
            ],
            text:      '',
            selectAll: false
        }));
    }

    _handleItemSelectPress = (id) => {
        this.setState(({ toDoList }) => ({
            toDoList: toDoList.map((item) => item.id === id
                ? {
                    ...item,
                    selected: !item.selected
                }
                : item
            )
        }));
    }

    _handleItemLikePress = (id) => {
        this.setState(({ toDoList }) => ({
            toDoList: toDoList.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        isLiked: !item.isLiked
                    }
                    : item
            )
        }));
    }

    _handleItemSavePress = (id, text) => {
        this.setState(({ toDoList }) => ({
            toDoList: toDoList.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        text
                    }
                    : item
            )
        }));
    }

    _handleItemDeletePress = (id) => {
        const { toDoList, selectAll } = this.state;
        const filteredToDoList = toDoList.filter((item) => item.id !== id);

        this.setState({
            toDoList:  filteredToDoList,
            selectAll: filteredToDoList.length ? selectAll : false
        });
    }

    _handleSortPress = () => {
        this.setState(({ sort }) => ({
            sort: sort + 1 < SORT.length ? sort + 1 : 0
        }));
    }

    _handleNoFunctionPress = () => {
        this.setState(({ showPopUp }) => ({
            showPopUp: !showPopUp
        }));
    }

    _renderToDoItems = () => {
        const { toDoList, filter, sort } = this.state;

        return (
            toDoList
                .filter((item) => filter
                    ? item.text.indexOf(filter) > -1
                    : true
                )
                .sort(SORT[sort].func)
                .map((item) => (
                    <ToDoItem
                        { ...item }
                        key = { item.id }
                        onDeletePress = { this._handleItemDeletePress }
                        onLikePress = { this._handleItemLikePress }
                        onSavePress = { this._handleItemSavePress }
                        onSelectPress = { this._handleItemSelectPress }
                    />
                ))
        );
    }

    render () {
        const {
            toDoList,
            selectAll,
            searchInFocus,
            inputInFocus,
            filter,
            text,
            sort,
            showPopUp
        } = this.state;

        return (
            <section className = { Styles.toDoList }>
                {
                    showPopUp
                        ? <PopUp message = 'coming soon...' onButtonPress = { this._handleNoFunctionPress } />
                        : null
                }

                {/* HEADER */}
                <div className = { Styles.header }>
                    <div className = { Styles.left }>
                        <span>To Do List</span>
                    </div>
                    <div
                        className = { [
                            Styles.right,
                            searchInFocus
                                ? Styles.focused
                                : null
                        ].join(' ') }>
                        <div className = { Styles.searchWrapper }>
                            <input
                                className = { Styles.searchInput }
                                placeholder = 'Search'
                                type = 'text'
                                value = { filter }
                                onBlur = { this._handleSearchBlur }
                                onChange = { this._handleSearchChange }
                                onFocus = { this._handleSearchFocus }
                            />
                            {
                                filter
                                    ? <Ionicon
                                        className = { Styles.icon }
                                        color = '#768387'
                                        fontSize = '12px'
                                        icon = 'md-close'
                                        onClick = { this._handleSearchClear }
                                    />
                                    : null
                            }
                            <Ionicon
                                className = { Styles.searchIcon }
                                color = '#768387'
                                icon = 'ios-search'
                            />
                        </div>
                        <i
                            className = { [Styles.icon, SORT[sort].icon].join(' ') }
                            onClick = { this._handleSortPress }
                        />
                        <i
                            className = { [Styles.icon, 'fa fa-cog'].join(' ') }
                            onClick = { this._handleNoFunctionPress }
                        />
                        <i
                            className = { [Styles.icon, 'fa fa-times'].join(' ') }
                            onClick = { this._handleNoFunctionPress }
                        />
                    </div>
                </div>

                {/* BODY */}
                <div className = { Styles.body }>
                    {
                        toDoList.length
                            ? this._renderToDoItems()
                            : <div className = { Styles.noTasks } >
                                <span>You do not have tasks...</span>
                            </div>
                    }
                </div>

                {/* FOOTER */}
                <div className = { Styles.footer }>
                    <div className = { Styles.selectAll } onClick = { this._handleSelectAllClick } >
                        <CheckBox isChecked = { selectAll } />
                        <span>Select all</span>
                    </div>
                    <form
                        className = { [
                            Styles.right,
                            inputInFocus
                                ? Styles.focused
                                : null
                        ].join(' ') }
                        onSubmit = { this._handleAddItemPress }>
                        <div className = { Styles.searchWrapper }>
                            <input
                                className = { Styles.searchInput }
                                placeholder = 'Write here'
                                type = 'text'
                                value = { text }
                                onBlur = { this._handleInputBlur }
                                onChange = { this._handleInputChange }
                                onFocus = { this._handleInputFocus }
                            />
                        </div>
                        <button className = { Styles.addButton } >
                            + Add Task
                        </button>
                    </form>
                </div>
            </section>
        );
    }
}

export default ToDoList;
