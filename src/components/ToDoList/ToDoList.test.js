//Core
import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Instruments
import ToDoList from './';

configure({ adapter: new Adapter() });

const filterText = 'test filter';
const inputText = 'input test text';

const state = {
    toDoList:      [],
    text:          '',
    searchInFocus: false,
    inputInFocus:  false,
    selectAll:     false,
    filter:        '',
    sort:          0,
    showPopUp:     false
};

const modifiedState = {
    toDoList: [
        {
            selected: true
        },
        {
            selected: true
        }
    ]
}

const result = mount( <ToDoList /> );

describe('ToDoList component', () => {
    test(`should have text in header "To Do List"`, () => {
        expect(result.find(`span[children='To Do List']`)).toHaveLength(1);
    });

    test(`should have search input`, () => {
        expect(result.find(`input[placeholder='Search']`)).toHaveLength(1);
    });

    test(`should have text input field`, () => {
        expect(result.find(`input[placeholder='Write here']`)).toHaveLength(1);
    });

    test(`should have "Select All" span`, () => {
        expect(result.find(`span[children='Select all']`)).toHaveLength(1);
    });

    test(`should have "+ Add Task" button`, () => {
        expect(result.find(`button[children='+ Add Task']`)).toHaveLength(1);
    });

    test(`should have valid initial state`, () => {
        expect(result.state()).toEqual(state);
        expect(result.find(`span[children='You do not have tasks...']`)).toHaveLength(1);
    });

    test(`_handleSearchFocus function should change state.searchInFocus = true`, () => {
        result.instance()._handleSearchFocus();
        expect(result.state().searchInFocus).toEqual(true);
    });

    test(`_handleSearchBlur function should change state.searchInFocus = false`, () => {
        result.instance()._handleSearchBlur();
        expect(result.state().searchInFocus).toEqual(false);
    });

    test(`_handleSearchChange function should change state.filter = "${filterText}"`, () => {
        result.instance()._handleSearchChange({
            target: {
                value: filterText
            }
        });
        expect(result.state().filter).toEqual(filterText);
        result.update()

        result.instance()._handleSearchChange({
            target: {
                value: ''
            }
        });
        expect(result.state().filter).toEqual('');
        result.update()
    });

    test(`_handleSearchClear function should clear state.filter`, () => {
        result.instance()._handleSearchClear();
        expect(result.state().filter).toEqual('');
    });

    test(`_handleInputFocus function should change state.inputInFocus = true`, () => {
        result.instance()._handleInputFocus();
        expect(result.state().inputInFocus).toEqual(true);
    });

    test(`_handleInputBlur function should change state.inputInFocus = false`, () => {
        result.instance()._handleInputBlur();
        expect(result.state().inputInFocus).toEqual(false);
    });

    test(`_handleSelectAllClick function should not change state if there no items`, () => {
        result.instance()._handleSelectAllClick();
        expect(result.state().toDoList).toEqual(state.toDoList);
    });

    test(`_handleInputChange function should change state.text = "${inputText}"`, () => {
        result.instance()._handleInputChange({
            target: {
                value: inputText
            }
        });
        expect(result.state().text).toEqual(inputText);
    });

    test(`_handleAddItemPress function should add new element to state`, () => {
        expect(result.state().toDoList).toHaveLength(0);
        expect(result.find(`.fa-thumbs-o-up`)).toHaveLength(0);
        
        result.instance()._handleAddItemPress({ preventDefault: jest.fn() });
        result.update();
        expect(result.state().toDoList).toHaveLength(1);
        expect(result.find(`.fa-thumbs-o-up`)).toHaveLength(1);
        
        result.instance()._handleAddItemPress({ preventDefault: jest.fn() });
        result.update();
        expect(result.state().toDoList).toHaveLength(1);
        expect(result.find(`.fa-thumbs-o-up`)).toHaveLength(1);
        
        result.instance()._handleInputChange({
            target: {
                value: inputText
            }
        });

        result.instance()._handleAddItemPress({ preventDefault: jest.fn() });
        result.update();
        expect(result.state().toDoList).toHaveLength(2);
        expect(result.find(`.fa-thumbs-o-up`)).toHaveLength(2);
    });

    test(`_handleSelectAllClick function should select every item in state`, () => {
        result.instance()._handleSelectAllClick();
        expect(result.state().toDoList
            .map(item => ({selected: item.selected})))
            .toEqual(modifiedState.toDoList);
    });

    test(`_handleItemSelectPress function should update state.item.selected value`, () => {
        const item = result.state().toDoList[0];
        const itemSelected = item.selected;

        result.instance()._handleItemSelectPress(item.id);
        expect(result.state().toDoList[0].selected).toEqual(!itemSelected);
    });

    test(`_handleItemLikePress function should update state.item.isLiked value`, () => {
        const item = result.state().toDoList[0];
        const isLiked = item.isLiked;

        result.instance()._handleItemLikePress(item.id);
        expect(result.state().toDoList[0].isLiked).toEqual(!isLiked);
    });

    test(`_handleItemSavePress function should update state.item.text value`, () => {
        const item = result.state().toDoList[0];
        const text = 'test item save text function';

        result.instance()._handleItemSavePress(item.id, text);
        expect(result.state().toDoList[0].text).toEqual(text);
    });

    test(`_handleNoFunctionPress function should change state.showPopUp value`, () => {
        result.instance()._handleNoFunctionPress();
        expect(result.state().showPopUp).toEqual(true);

        result.instance()._handleNoFunctionPress();
        expect(result.state().showPopUp).toEqual(false);
    });

    test(`_handleSortPress function should increment state.sort value`, () => {
        expect(result.state().sort).toEqual(0);

        result.instance()._handleSortPress();
        expect(result.state().sort).toEqual(1);

        result.instance()._handleSortPress();
        expect(result.state().sort).toEqual(2);

        result.instance()._handleSortPress();
        expect(result.state().sort).toEqual(0);
    });

    test(`_handleItemDeletePress function should select delete 1 item from state`, () => {
        let item = result.state().toDoList[0];
        result.instance()._handleItemDeletePress(item.id);
        expect(result.state().toDoList).toHaveLength(1);

        item = result.state().toDoList[0];
        result.instance()._handleItemDeletePress(item.id);
        expect(result.state().toDoList).toHaveLength(0);

        result.update();
        expect(result.find(`.fa-thumbs-o-up`)).toHaveLength(0);
    });

});
