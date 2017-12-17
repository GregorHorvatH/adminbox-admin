// Core
import React, { Component } from 'react';
import { bool, func, string } from 'prop-types';
import { Link } from 'react-router';

// Instruments
import Styles from './styles.scss';

class MenuItem extends Component {

    _handleMenuItemPress = () => {
        const { screen, onMenuItemPress } = this.props;

        onMenuItemPress(screen);
    }

    render () {
        const { icon, screen, selected } = this.props;

        return (
            <Link
                className = { Styles.menuItem }
                to = { screen }
                onClick = { this._handleMenuItemPress }>
                <span
                    className = { [
                        Styles.label,
                        selected ? Styles.active : null
                    ].join(' ') } >
                    <i
                        className = { [icon, Styles.icon].join(' ') }
                        onClick = { this._handleSortPress }
                    />
                    { screen }
                </span>
                {
                    selected
                        ? <div className = { Styles.selected } />
                        : null
                }
            </Link>
        );
    }
}

MenuItem.propTypes = {
    icon:            string.isRequired,
    screen:          string.isRequired,
    onMenuItemPress: func.isRequired,
    isMouseOver:     func,
    selected:        bool
};

export default MenuItem;
