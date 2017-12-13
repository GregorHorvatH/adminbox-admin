// Core
import React from 'react';

// Instruments
import Catcher from '../../components/Catcher';
import Menu from '../../components/Menu';
import Navbar from '../../components/Navbar';
import Workspace from '../../components/Workspace';

const App = () => (
    <section>
        <Catcher>
            <div>
                <Menu />
                <Navbar />
                <Workspace />
            </div>
        </Catcher>
    </section>
);

export default App;
