// Core
import React, { Component } from 'react';
import { array } from 'prop-types';

// Instruments
import MenuItem from '../MenuItem';
import Styles from './styles.scss';

class Menu extends Component {

    static propTypes = {
        items: array.isRequired
    };

    state = {
        selected: undefined
    }

    componentWillMount () {
        const { items } = this.props;

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
        const { items } = this.props;
        const { selected } = this.state;

        return (
            <section className = { Styles.menu }>
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
            </section>
        );
    }
}

export default Menu;
