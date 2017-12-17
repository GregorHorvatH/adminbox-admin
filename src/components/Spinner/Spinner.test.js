//Core
import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Instruments
import Spinner from './';

configure({ adapter: new Adapter() });

const result = mount(<Spinner />);

describe('Spinner component', () => {
    test(`should have 1 'div' element`, () => {
        expect(result.find('div')).toHaveLength(1);
    });
});
