// Core
import React from 'react';

// Instruments
import Catcher from '../../components/Catcher';
import Menu from '../../components/Menu';
import Workspace from '../../components/Workspace';

const App = () => (
    <section>
        <Catcher>
            <div>
                <Menu />
                <Workspace />
            </div>
        </Catcher>
    </section>
);

export default App;
