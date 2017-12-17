// Core
import React, { Component } from 'react';
import { string, bool, func } from 'prop-types';

// Instruments
import Styles from './styles.scss';
import CheckBox from '../CheckBox';

class ToDoItem extends Component {
    state = {
        isEditMode: false,
        newText:    this.props.text
    }

    _handleSelectPress = () => {
        const { isEditMode } = this.state;
        const { id, onSelectPress } = this.props;

        if (isEditMode) {
            return;
        }

        onSelectPress(id);
    };

    _handleEnterPress = (event) => {
        const enterKey = event.key === 'Enter';

        if (enterKey) {
            event.preventDefault();
            this._handleSavePress();
        }
    }

    _handleSavePress = () => {
        const { id, onSavePress, text } = this.props;
        const { newText } = this.state;

        onSavePress(id, newText ? newText : text);
        this.setState({
            isEditMode: false
        });
    }

    _handleLikePress = () => {
        const { id, onLikePress } = this.props;

        onLikePress(id);
    };

    _handleEditPress = () => {
        const { text } = this.props;

        this.setState({
            isEditMode: !this.state.isEditMode,
            newText:    text
        }, () => {
            const { isEditMode, newText } = this.state;
            const caretPos = newText.length;

            if (isEditMode) {
                this.input.focus();
                this.input.setSelectionRange(caretPos, caretPos);
            }
        });
    };

    _handleDeletePress = () => {
        const { id, onDeletePress } = this.props;

        onDeletePress(id);
    };

    _handleInputChange = (event) => {
        this.setState({
            newText: event.target.value
        });
    }

    _renderEditMode = () => (
        <div className = { Styles.inputWrapper } >
            <input
                className = { Styles.input }
                ref = { (ref) => this.input = ref }
                type = 'text'
                value = { this.state.newText }
                onChange = { this._handleInputChange }
                onKeyPress = { this._handleEnterPress }
            />
            <i
                className = { [
                    'fa fa-check',
                    Styles.doneIcon
                ].join(' ') }
                onClick = { this._handleSavePress }
            />
        </div>
    )

    render () {
        const { isEditMode } = this.state;
        const { text, selected, isLiked } = this.props;

        return (
            <div className = { Styles.toDoItem } >
                <div
                    className = { [
                        Styles.left,
                        isEditMode
                            ? Styles.edit
                            : null
                    ].join(' ') } onClick = { this._handleSelectPress } >
                    <CheckBox isChecked = { selected } />
                    {
                        isEditMode
                            ? this._renderEditMode(text)
                            : <span>{ text }</span>
                    }
                </div>
                <div className = { Styles.right } >
                    <i
                        className = { [
                            isLiked ? 'fa fa-thumbs-up' : 'fa fa-thumbs-o-up',
                            Styles.icon
                        ].join(' ') }
                        onClick = { this._handleLikePress }
                    />
                    <i
                        className = { [
                            'fa fa-pencil-square-o',
                            Styles.icon
                        ].join(' ') }
                        onClick = { this._handleEditPress }
                    />
                    <i
                        className = { [
                            'fa fa-times',
                            Styles.icon
                        ].join(' ') }
                        onClick = { this._handleDeletePress }
                    />
                </div>
            </div>
        );
    }
}

ToDoItem.propTypes = {
    id:            string.isRequired,
    text:          string.isRequired,
    onDeletePress: func.isRequired,
    onLikePress:   func.isRequired,
    onSavePress:   func.isRequired,
    onSelectPress: func.isRequired,
    isLiked:       bool,
    selected:      bool
};

export default ToDoItem;
