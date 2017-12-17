// Core
import React from 'react';

// Instruments
import Styles from './styles.scss';
import logo from '../../theme/assets/logo.png';
import Ionicon from 'react-ionicons';

import icoNotifications from '../../theme/assets/ico_notifications.png';
import icoMail from '../../theme/assets/ico_mail.png';
import icoStar from '../../theme/assets/ico_star.png';

import mockSearch from '../../theme/assets/mock_search.png';
import avatar1 from '../../theme/assets/avatar_1.png';
import icoProgress from '../../theme/assets/ico_progress.png';

const Navbar = () => (
    <section className = { Styles.navbar }>
        <div className = { Styles.logoWrapper }>
            <span>Admin<b>Box</b></span>
            <img src = { logo } />
        </div>
        <div className = { Styles.headerWrapper } >
            <div className = { Styles.icons } >
                <img className = { Styles.icon } src = { icoNotifications } />
                <img className = { Styles.icon } src = { icoMail } />
                <img className = { Styles.icon } src = { icoStar } />
            </div>
            <div className = { Styles.right }>
                <img className = { Styles.search } src = { mockSearch } />
                <div className = { Styles.userWrapper } >
                    <img className = { Styles.avatar } src = { avatar1 } />
                    <span className = { Styles.userName } >Gregory Horvath</span>
                    <Ionicon color = '#768387' icon = 'ios-arrow-down' />
                </div>
                <img className = { Styles.progress } src = { icoProgress } />
            </div>
        </div>
    </section>
);

export default Navbar;
