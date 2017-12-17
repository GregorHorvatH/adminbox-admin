//Core
import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Instruments
import Catcher from './';

configure({ adapter: new Adapter() });

const state = {
    hasError:     false,
    errorMessage: undefined
};

const props = {
    children: <div />
};

const result = mount(<Catcher {...props} />);

const errorProps = {
    children: <div>{ new Error('error test') }</div>
};

const errorResult = mount(<Catcher {...errorProps} />);

describe('Catcher component', () => {
    test(`should have 1 'div' element`, () => {
        expect(result.find('div')).toHaveLength(1);
    });

    test(`should not have 'p' element`, () => {
        expect(result.find('p')).toHaveLength(0);
    });

    test(`should have 2 'p' element`, () => {
        expect(errorResult.find('p')).toHaveLength(2);
    });

    test(`should have 1 'img' element`, () => {
        expect(errorResult.find('img')).toHaveLength(1);
    });
});
