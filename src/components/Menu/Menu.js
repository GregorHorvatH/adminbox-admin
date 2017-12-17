// Core
import React, { Component } from 'react';

// Instruments
import MenuItem from '../MenuItem';
import Styles from './styles.scss';

class Menu extends Component {

    state = {
        items: [
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
        ],
        selected: undefined
    }

    componentWillMount () {
        const { items } = this.state;

        if (items.length) {
            this.setState({
                selected: items[0].screen
            });
        }
    }

    _handleMenuItemPress = (screen) => {
        this.setState({
            selected: screen
        });
    }

    render () {
        const { items, selected } = this.state;

        return (
            <div className = { Styles.menu }>
                {
                    items.map((item) => (
                        <MenuItem
                            icon = { item.icon }
                            key = { item.screen }
                            screen = { item.screen }
                            selected = { item.screen === selected }
                            onMenuItemPress = { this._handleMenuItemPress }
                        />
                    ))
                }
            </div>
        );
    }
}

export default Menu;
