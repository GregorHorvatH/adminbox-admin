import React from 'react';
import { string, bool, func } from 'prop-types';
import Styles from './styles.scss';
import Ionicon from 'react-ionicons';

import CheckBox from '../CheckBox';

const ToDoItem = ({ id, text, selected, onSelectPress }) => {

    const _handleSelectPress = () => {
        onSelectPress(id);
    };

    return (
        <div className = { Styles.toDoItem } >
            <div className = { Styles.left } onClick = { _handleSelectPress } >
                <CheckBox isChecked = { selected } />
                <span>{ text }</span>
            </div>
            <div className = { Styles.right } >
                <Ionicon
                    className = { Styles.icon }
                    color = '#828f95'
                    fontSize = '14px'
                    icon = 'md-thumbs-up'
                />
                <Ionicon
                    className = { Styles.icon }
                    color = '#828f95'
                    fontSize = '14px'
                    icon = 'md-open'
                />
                <Ionicon
                    className = { Styles.icon }
                    color = '#828f95'
                    fontSize = '14px'
                    icon = 'md-close'
                />
            </div>
        </div>
    );
};

ToDoItem.propTypes = {
    id:            string.isRequired,
    text:          string.isRequired,
    onSelectPress: func.isRequired,
    selected:      bool
};

export default ToDoItem;
