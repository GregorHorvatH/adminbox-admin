// Core
import React from 'react';
import { string, func } from 'prop-types';

// Instruments
import Styles from './styles.scss';

const PopUp = ({ message, onButtonPress }) => (
    <div className = { Styles.popUp } >
        <div className = { Styles.window } >
            <span className = { Styles.message } >{ message }</span>
            <button className = { Styles.button } onClick = { onButtonPress } >Ok</button>
        </div>
    </div>
);

PopUp.propTypes = {
    message:       string.isRequired,
    onButtonPress: func.isRequired
};

export default PopUp;
