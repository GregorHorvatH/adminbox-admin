import React from 'react';
import { bool } from 'prop-types';
import Ionicon from 'react-ionicons';

import Styles from './styles.scss';

const CheckBox = ({ isChecked }) => (
    <span
        className = { [
            Styles.checkBox,
            isChecked
                ? Styles.checked
                : {}
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
