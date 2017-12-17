// Core
import React, { Component } from 'react';

// Instruments
import Ionicon from 'react-ionicons';
import Styles from './styles.scss';
import PopUp from '../PopUp';

import icoNotifications from '../../theme/assets/ico_notifications.png';
import icoMail from '../../theme/assets/ico_mail.png';
import icoStar from '../../theme/assets/ico_star.png';
import logo from '../../theme/assets/logo.png';
import mockSearch from '../../theme/assets/mock_search.png';
import avatar1 from '../../theme/assets/avatar_1.png';
import icoProgress from '../../theme/assets/ico_progress.png';

class Navbar extends Component {

    state = {
        showPopUp: false
    }

    _handleNoFunctionPress = () => {
        this.setState(({ showPopUp }) => ({
            showPopUp: !showPopUp
        }));
    }

    render () {
        const { showPopUp } = this.state;

        return (
            <div>
                {
                    showPopUp
                        ? <PopUp
                            message = 'coming soon...'
                            onButtonPress = { this._handleNoFunctionPress }
                        />
                        : null
                }

                <section className = { Styles.navbar }>
                    <div className = { Styles.logoWrapper }>
                        <span>Admin<b>Box</b></span>
                        <img src = { logo } />
                    </div>
                    <div className = { Styles.headerWrapper } >
                        <div className = { Styles.icons } >
                            <img
                                className = { Styles.icon }
                                src = { icoNotifications }
                                onClick = { this._handleNoFunctionPress }
                            />
                            <img
                                className = { Styles.icon }
                                src = { icoMail }
                                onClick = { this._handleNoFunctionPress }
                            />
                            <img
                                className = { Styles.icon }
                                src = { icoStar }
                                onClick = { this._handleNoFunctionPress }
                            />
                        </div>
                        <div className = { Styles.right }>
                            <img
                                className = { Styles.mockSearch }
                                src = { mockSearch }
                                onClick = { this._handleNoFunctionPress }
                            />
                            <div className = { Styles.userWrapper } onClick = { this._handleNoFunctionPress } >
                                <img className = { Styles.avatar } src = { avatar1 } />
                                <span className = { Styles.userName } >Gregory Horvath</span>
                                <Ionicon color = '#768387' icon = 'ios-arrow-down' />
                            </div>
                            <img
                                className = { Styles.progress }
                                src = { icoProgress }
                                onClick = { this._handleNoFunctionPress }
                            />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Navbar;
