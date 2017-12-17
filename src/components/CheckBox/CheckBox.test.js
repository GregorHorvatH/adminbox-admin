//Core
import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Instruments
import CheckBox from './';

configure({ adapter: new Adapter() });

const props = {
    isChecked: false
};

const result = mount(<CheckBox { ...props } />);

const propsChecked = {
    isChecked: true
};

const resultChecked = mount(<CheckBox { ...propsChecked } />);

describe('CheckBox component', () => {
    test(`should have 1 'span' element`, () => {
        expect(result.find('span')).toHaveLength(1);
    });

    test(`should not have 'Ionicon' element`, () => {
        expect(result.find('Ionicon')).toHaveLength(0);
    });

    test(`should have 1 'Ionicon' element`, () => {
        expect(resultChecked.find('Ionicon')).toHaveLength(1);
    });
});
