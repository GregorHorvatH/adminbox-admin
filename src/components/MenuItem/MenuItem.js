// Core
import React, { Component } from 'react';
import { bool, func, string } from 'prop-types';
import Ionicon from 'react-ionicons';

import Styles from './styles.scss';

class MenuItem extends Component {

    state = {
        color:       undefined,
        isMouseOver: false
    };

    componentWillMount () {
        this.setState({
            color: this._getColor()
        });
    }

    _getColor = (isMouseOver) => {
        const { selected } = this.props;

        if (selected || isMouseOver) {
            return 'white';
        }

        return '#768387';
    };

    _handleMouseOver = () => {
        if (this.state.isMouseOver) {
            return;
        }

        this.setState({
            color:       this._getColor(true),
            isMouseOver: true
        });
    };

    _handleMouseLeave = () => {
        if (!this.state.isMouseOver) {
            return;
        }

        this.setState({
            color:       this._getColor(false),
            isMouseOver: false
        });
    };

    render () {
        const { icon, label, selected } = this.props;
        const { color } = this.state;

        return (
            <div
                className = { Styles.menuItem }
                onMouseLeave = { this._handleMouseLeave }
                onMouseOver = { this._handleMouseOver } >
                <Ionicon color = { color } icon = { icon } />
                <span className = { Styles.label } style = { { color } }>{label}</span>
                {
                    selected ? <div className = { Styles.hover } /> : null
                }
            </div>
        );
    }
}

MenuItem.propTypes = {
    icon:        string.isRequired,
    label:       string.isRequired,
    isMouseOver: func,
    selected:    bool
};

export default MenuItem;
