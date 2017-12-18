//Core
import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Instruments
import MenuItem from './';

configure({ adapter: new Adapter() });

const props = {
    icon:            'test-icon',
    screen:          'TestScreen',
    onMenuItemPress: jest.fn(),
    selected:        false
};

const result = mount(<MenuItem
    icon = { props.icon }
    key = { props.screen }
    screen = { props.screen }
    selected = { props.selected }
    onMenuItemPress = { props.onMenuItemPress }
/>);

describe('MenuItem component', () => {
    test(`should have 1 'Link' element`, () => {
        expect(result.find('Link')).toHaveLength(1);
    });

    test(`should have valid initial props`, () => {
        expect(result.props()).toEqual(props);
    });

    test(`_handleMenuItemPress function should call props.onMenuItemPress function`, () => {
        result.instance()._handleMenuItemPress();
        expect(result.props().onMenuItemPress.mock.calls).toHaveLength(1);
    });

});
