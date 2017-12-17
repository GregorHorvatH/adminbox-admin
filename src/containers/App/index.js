// Core
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

// Instruments
import Catcher from '../../components/Catcher';
import AdminBox from '../../components/AdminBox';
import Dashboard from '../../components/Dashboard';
import Page404 from '../../components/Page404';

const App = () => (
    <section>
        <Catcher>
            <Router history = { hashHistory }>
                <Route component = { AdminBox } path = '/'>
                    <IndexRoute component = { Dashboard } />
                    <Route component = { Dashboard } path = '/dashboard' />
                    <Route component = { Page404 } path = '*' />
                </Route>
            </Router>
        </Catcher>
    </section>
);

export default App;
