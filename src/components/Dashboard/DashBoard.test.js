//Core
import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Instruments
import Dashboard from './';

configure({ adapter: new Adapter() });

const result = mount(<Dashboard />);

describe('Dashboard component', () => {
    test(`should have 1 'ToDoList' element`, () => {
        expect(result.find('ToDoList')).toHaveLength(1);
    });
});
