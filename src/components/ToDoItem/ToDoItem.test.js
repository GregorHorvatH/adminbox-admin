//Core
import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Instruments
import ToDoItem from './';

configure({ adapter: new Adapter() });

const taskText1 = 'test task';
const taskText2 = 'test task modified text';

const initialState = {
    isEditMode: false,
    newText:    taskText1
};

const result1 = mount(
    <ToDoItem
        id = '5ak0VgS277sLCIC'
        text = { taskText1 }
        selected = { false }
        isLiked = { false }
        onDeletePress = { jest.fn() }
        onLikePress = { jest.fn() }
        onSavePress = { jest.fn() }
        onSelectPress = { jest.fn() }
    />
);

const result2 = mount(
    <ToDoItem
        id = '5ak0VgS277sLCIC'
        text = { taskText1 }
        selected = { true }
        isLiked = { true }
        onDeletePress = { jest.fn() }
        onLikePress = { jest.fn() }
        onSavePress = { jest.fn() }
        onSelectPress = { jest.fn() }
    />
);

describe('ToDoItem component', () => {
    test(`"not selected, not liked" should have text "${taskText1}"`, () => {
        expect(result1.find(`span[children='${taskText1}']`)).toHaveLength(1);
    });

    test(`"not selected, not liked" should not have text "svg" element`, () => {
        expect(result1.find(`svg`)).toHaveLength(0);
    });

    test(`"not selected, not liked" should have class "fa-thumbs-o-up"`, () => {
        expect(result1.find(`.fa-thumbs-o-up`)).toHaveLength(1);
    });

    test(`"selected, liked" should not have text "svg" element`, () => {
        expect(result2.find(`svg`)).toHaveLength(1);
    });

    test(`"selected, liked" should have class "fa-thumbs-up"`, () => {
        expect(result2.find(`.fa-thumbs-up`)).toHaveLength(1);
    });

    test(`should have valid initial state`, () => {
        expect(result1.state()).toEqual(initialState);
    });

    test(`should have valid prop types`, () => {
        expect(typeof result1.props().id).toEqual('string');
        expect(typeof result1.props().text).toEqual('string');
        expect(typeof result1.props().selected).toEqual('boolean');
        expect(typeof result1.props().isLiked).toEqual('boolean');
        expect(typeof result1.props().onDeletePress).toEqual('function');
        expect(typeof result1.props().onLikePress).toEqual('function');
        expect(typeof result1.props().onSavePress).toEqual('function');
        expect(typeof result1.props().onSelectPress).toEqual('function');
    });

    test(`_handleEditPress function should change state.isEditMode value`, () => {
        result1.instance()._handleEditPress();
        expect(result1.state().isEditMode).toEqual(true);        

        result1.instance()._handleEditPress();
        expect(result1.state().isEditMode).toEqual(false);        
    });

    test(`_handleSelectPress function should change state.selected value if state.isEditMode = true`, () => {
        result1.instance()._handleEditPress();
        result1.instance()._handleSelectPress();
        expect(result1.props().onSelectPress.mock.calls).toHaveLength(0);

        result1.instance()._handleEditPress();
        result1.instance()._handleSelectPress();
        expect(result1.props().onSelectPress.mock.calls).toHaveLength(1);
    });

    test(`_handleInputChange value should reflect according changes if any text input provided`, () => {
        result1.instance()._handleEditPress();
        result1.update();        
        result1.find('input').simulate('change', {
            target: {
                value: taskText2
            }
        });
        expect(result1.find('input').props().value).toBe(taskText2);
        expect(result1.state().newText).toEqual(taskText2);
    });

    test(`_handleLikePress value should call props.onLikePress`, () => {
        result1.instance()._handleLikePress();
        expect(result1.props().onLikePress.mock.calls).toHaveLength(1);
    });

    test(`_handleDeletePress value should call props.onDeletePress`, () => {
        result1.instance()._handleDeletePress();
        expect(result1.props().onDeletePress.mock.calls).toHaveLength(1);
    });

    test(`_handleSavePress value should call props.onSavePress and set isEditMode to false`, () => {
        result1.instance()._handleSavePress();
        expect(result1.props().onSavePress.mock.calls).toHaveLength(1);
        expect(result1.state().isEditMode).toEqual(false);        
    });

    test('simulate keydown events', () => {
        result2.instance()._handleEditPress();
        result2.update();
        expect(result2.find(`input`)).toHaveLength(1);

        result2.instance()._handleEnterPress({
            preventDefault: jest.fn(),
            key: 'someKey'
        });

        expect(result2.props().onSavePress.mock.calls).toHaveLength(0);

        result2.instance()._handleEnterPress({
            preventDefault: jest.fn(),
            key: 'Enter'
        });

        expect(result2.props().onSavePress.mock.calls).toHaveLength(1);
    });

});
