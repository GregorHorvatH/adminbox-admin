//Core
import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Instruments
import App from './';

configure({ adapter: new Adapter() });

const result = mount(<App />);

describe('App component', () => {
    test(`should have 1 'app' class`, () => {
        expect(result.find('.app')).toHaveLength(1);
    });
});
