// Core
import React from 'react';

// Instruments
import Styles from './styles.scss';
import pic404 from '../../theme/assets/404.png';

const Page404 = () => (
    <section className = { Styles.page404 }>
        <div className = { Styles.left }>
            <img src = { pic404 } />
        </div>
        <div className = { Styles.right }>
            <span className = { Styles.header1 }>404</span>
            <span className = { Styles.header2 }>Page not found</span>
            <span className = { Styles.text }>We cant seem to find the page you're looking for.</span>
            <button className = { Styles.button } >Back to dashboard</button>
        </div>
    </section>
);

export default Page404;
