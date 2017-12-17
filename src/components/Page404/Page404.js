// Core
import React from 'react';
import { Link } from 'react-router';

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
            <span className = { Styles.text }>We cant seem to find the page you&apos;re looking for.</span>
            <Link className = { Styles.button } to = 'Dashboard'>Back to dashboard</Link>
        </div>
    </section>
);

export default Page404;
