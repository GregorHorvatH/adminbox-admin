// Core
import React from 'react';

// Instruments
import MenuItem from '../MenuItem';
import Styles from './styles.scss';

const Menu = () => (
    <div className = { Styles.menu }>
        <MenuItem selected icon = 'ios-speedometer-outline' screen = 'Dashboard' />
        <MenuItem icon = 'ios-albums-outline' screen = 'Layouts' />
        <MenuItem icon = 'ios-calendar-outline' screen = 'Calendar' />
        <MenuItem icon = 'ios-bookmarks-outline' screen = 'UI Elements' />
        <MenuItem icon = 'ios-text-outline' screen = 'Text & Forms' />
        <MenuItem icon = 'ios-mail-outline' screen = 'Email' />
        <MenuItem icon = 'ios-apps-outline' screen = 'Icon Set' />
        <MenuItem icon = 'ios-browsers-outline' screen = 'Data Tables' />
        <MenuItem icon = 'md-paper' screen = 'Charts' />
        <MenuItem icon = 'ios-map-outline' screen = 'Maps' />
        <MenuItem icon = 'ios-person-outline' screen = 'Profile' />
        <MenuItem icon = 'ios-lock-outline' screen = 'Login Page' />
    </div>
);

export default Menu;
