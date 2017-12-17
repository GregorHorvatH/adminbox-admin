//Core
import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Instruments
import Menu from './';

configure({ adapter: new Adapter() });

const props = {
    items: [
        {
            icon:   'fa fa-tachometer',
            screen: 'Dashboard'
        },
        {
            icon:   'fa fa-pencil',
            screen: 'Layouts'
        }
    ]
};

const emptyProps = {
    items: []
};

const state = {
    selected: 'Dashboard'
};

const mutatedState = {
    selected: 'Test screen'
};

const stateEmptyProps = {
    selected: undefined
};

const result = mount(<Menu {...props} />);

const resultEmptyProps = mount(<Menu {...emptyProps} />);

describe('Menu component', () => {
    test(`should have 1 'section' element`, () => {
        expect(result.find('section')).toHaveLength(1);
    });

    test(`should have 2 'MenuItem' elements`, () => {
        expect(result.find('MenuItem')).toHaveLength(2);
    });

    test(`should have valid initial state`, () => {
        expect(result.state().selected).toEqual(state.selected);
    });

    test(`_handleMenuItemPress function should change state.selected value`, () => {
        result.instance()._handleMenuItemPress('Test screen');

        expect(result.state().selected).toEqual(mutatedState.selected);        
    });

    test(`should have valid initial state.selected = undefined if no menu items`, () => {
        expect(resultEmptyProps.state().selected).toEqual(undefined);
    });

});
