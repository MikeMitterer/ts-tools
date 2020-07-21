import '../../../src/main/extensions/string.extensions';
import { addValues } from '../../../src/main/math/MyMath';

describe('String extensions', () => {
    test('center-Function', () => {
        expect('help'.center(10, '+')).toBe('+++help+++');
        expect(true).toBe(true);
    });

    test('Test2', () => {
        expect(true).not.toBe(false);
        expect(addValues(1, 1)).toBe(2);
    });
});
