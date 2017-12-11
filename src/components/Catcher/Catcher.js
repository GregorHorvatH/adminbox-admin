// Core
import React, { Component } from 'react';
import { object } from 'prop-types';

// Instruments
import Styles from './Styles.scss';
import errorImg from '../../theme/assets/why.jpg';

export default class Catcher extends Component {
    static propTypes = {
        children: object.isRequired
    }

    state = {
        hasError:     false,
        errorMessage: undefined
    }

    componentDidCatch (error, stack) {
        console.log('ERROR:', error.message);
        console.log('STACKTRACE:', stack.componentStack);

        this.setState(() => ({
            hasError:     true,
            errorMessage: error.message
        }));
    }

    render () {
        const { hasError, errorMessage } = this.state;
        const { children } = this.props;

        if (hasError) {
            return (
                <section className = { Styles.catcher }>
                    <span>A mysterious 👽 &nbsp;error 📛 &nbsp;occured.</span>
                    <p>
                        Our space 🛰 &nbsp;engineers strike team 👩🏼‍🚀 👨🏼‍🚀
                        &nbsp;is already working 🚀 &nbsp;in order to fix that
                        for you!
                    </p>
                    <img src = { errorImg } width = { 200 } />
                    <p>{ `Error: ${errorMessage}` }</p>
                </section>
            );
        }

        return children;
    }
}
