// Core
import React from 'react';

import MenuItem from '../MenuItem';
import Styles from './styles.scss';
import logo from '../../theme/assets/logo.png';

const Menu = () => (
    <section>
        <div className = { Styles.logoWrapper }>
            Admin<b>Box</b>
            <img src = { logo } />
        </div>
        <div className = { Styles.menu }>
            <MenuItem selected icon = 'ios-speedometer-outline' label = 'Dashboard' />
            <MenuItem icon = 'ios-albums-outline' label = 'Layouts' />
            <MenuItem icon = 'ios-calendar-outline' label = 'Calendar' />
            <MenuItem icon = 'ios-bookmarks-outline' label = 'UI Elements' />
            <MenuItem icon = 'ios-text-outline' label = 'Text & Forms' />
            <MenuItem icon = 'ios-mail-outline' label = 'Email' />
            <MenuItem icon = 'ios-apps-outline' label = 'Icon Set' />
            <MenuItem icon = 'ios-browsers-outline' label = 'Data Tables' />
            <MenuItem icon = 'md-paper' label = 'Charts' />
            <MenuItem icon = 'ios-map-outline' label = 'Maps' />
            <MenuItem icon = 'ios-person-outline' label = 'Profile' />
            <MenuItem icon = 'ios-lock-outline' label = 'Login Page' />
        </div>
    </section>
);

export default Menu;
