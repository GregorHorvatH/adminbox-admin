import { getUniqueID, SORT } from './';

const a = { text: '1' };
const b = { text: '2' };

describe('helpers: ', () => {
    test('getUniqueID function should be a function', () => {
        expect(typeof getUniqueID).toBe('function');
    });

    test('getUniqueID function should throw an error if wrong non-number arguments were passed', () => {
        function checkGetUniqueID () {
            getUniqueID(null, null);
        }
        expect(checkGetUniqueID).toThrowError(`The function argument should be a number!`);
    });

    test('getUniqueID should return a string', () => {
        expect(typeof getUniqueID()).toBe('string');
    });    

    test(`getUniqueID function should return a string from 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'`, () => {
        function checkGetUniqueID () {
            const result = getUniqueID();
            const reg = /^[0-9A-Za-z]+$/g;

            return reg.test(result);
        }

        expect(checkGetUniqueID).toBeTruthy();
    });

    test(`getUniqueID result length should be 15 by default `, () => {
        function checkGetUniqueID () {
            const result = getUniqueID();

            return result.length === 15;
        }

        expect(checkGetUniqueID).toBeTruthy();
    });

    test(`getUniqueID result length should be the same like in props `, () => {
        function checkGetUniqueID () {
            const result = getUniqueID(3);

            return result.length === 3;
        }

        expect(checkGetUniqueID).toBeTruthy();
    });

    test(`SORT length = 3 `, () => {
        expect(SORT.length).toEqual(3);
    });

    test(`SORT func "none" always return 0`, () => {
        const sort = SORT.find((item) => item.name === 'none')

        expect(sort.func(a, a)).toEqual(0);
        expect(sort.func(a, b)).toEqual(0);
        expect(sort.func(b, a)).toEqual(0);
    });

    test(`SORT func "asc"`, () => {
        const sort = SORT.find((item) => item.name === 'asc')
        
        expect(sort.func(a, a)).toEqual(0);
        expect(sort.func(a, b)).toEqual(-1);
        expect(sort.func(b, a)).toEqual(1);
    });

    test(`SORT func "desc"`, () => {
        const sort = SORT.find((item) => item.name === 'desc')
        
        expect(sort.func(a, a)).toEqual(0);
        expect(sort.func(a, b)).toEqual(1);
        expect(sort.func(b, a)).toEqual(-1);
    });

});
