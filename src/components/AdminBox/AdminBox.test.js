//Core
import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Instruments
import AdminBox from './';

configure({ adapter: new Adapter() });

const path = 'TestScreen';

const props = {
    children: <div />,
    location: {
        pathname: '/testScreen'
    }
};

const result = mount(<AdminBox {...props} />);

const propsNoPath = {
    children: <div />,
    location: {
        pathname: ''
    }
};

const resultNoPath = mount(<AdminBox {...propsNoPath} />);

describe('AdminBox component', () => {
    test(`should have 1 'Menu' element`, () => {
        expect(result.find('Menu')).toHaveLength(1);
    });

    test(`should have 1 'Navbar' element`, () => {
        expect(result.find('Navbar')).toHaveLength(1);
    });

    test(`should have 1 ${path} if path is wrote`, () => {
        expect(result.find('span[children="TestScreen"]')).toHaveLength(1);
    });

    test(`should have 1 ${path} if no path`, () => {
        expect(resultNoPath.find('span[children="Dashboard"]')).toHaveLength(1);
    });
});
