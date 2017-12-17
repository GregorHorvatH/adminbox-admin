import { getUniqueID } from './';

describe('helpers: ', () => {
    test('getUniqueID function should be a function', () => {
        expect(typeof getUniqueID).toBe('function');
    });

    test('getUniqueID function should throw an error if wrong non-number arguments were passed', () => {
        function getUniqueIDWithError () {
            getUniqueID(null, 1);
        }

        expect(getUniqueIDWithError).toThrowError(`The function argument should be a number!`);
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

});
