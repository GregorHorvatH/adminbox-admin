//Core
import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Instruments
import Navbar from './';

configure({ adapter: new Adapter() });

const result = mount(<Navbar />);

describe('Navbar component', () => {
    test(`should have 1 'section' element`, () => {
        expect(result.find('section')).toHaveLength(1);
    });

    test(`should have 2 'span' element`, () => {
        expect(result.find('span')).toHaveLength(2);
    });

    test(`component state should reflect according changes if click mocked element`, () => {
        result.instance()._handleNoFunctionPress();
        expect(result.state().showPopUp).toEqual(true);

        result.instance()._handleNoFunctionPress();
        expect(result.state().showPopUp).toEqual(false);
    });

});
