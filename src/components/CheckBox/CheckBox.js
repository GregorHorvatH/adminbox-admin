// Core
import React from 'react';
import { bool } from 'prop-types';
import Ionicon from 'react-ionicons';

// Instruments
import Styles from './styles.scss';

const CheckBox = ({ isChecked }) => (
    <span
        className = { [
            Styles.checkBox,
            isChecked
                ? Styles.checked
                : null
        ].join(' ') }>
        {
            isChecked
                ? <Ionicon color = 'white' fontSize = '20px' icon = 'ios-checkmark' />
                : null
        }
    </span>
);

CheckBox.propTypes = {
    isChecked: bool
};

export default CheckBox;
