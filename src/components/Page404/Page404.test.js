//Core
import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Instruments
import Page404 from './';

configure({ adapter: new Adapter() });

const result = mount(<Page404 />);

describe('Page404 component', () => {
    test(`should have 1 'section' element`, () => {
        expect(result.find('section')).toHaveLength(1);
    });

    test(`should have 1 'img' element`, () => {
        expect(result.find('img')).toHaveLength(1);
    });

    test(`should have 1 'Link' element`, () => {
        expect(result.find('Link')).toHaveLength(1);
    });
});
