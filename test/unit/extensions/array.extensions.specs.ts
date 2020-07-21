import '../../../src/main/extensions/array.extensions';

describe('array.extensions', () => {
    // const logger = LoggerFactory.getLogger('test.array.extensions');

    // beforeEach(() => {
    // });
    //
    // afterEach(() => {
    // });

    test('first element', /* async */ () => {
        const name = ['Mike', 'Gerda', 'Sarah'];

        expect(name.first()).toBe('Mike');
        expect(name.last()).toBe('Sarah');
    });

    test('last element', /* async */ () => {
        const name: string[] = [];

        expect(() => name.first()).toThrowError('Index out of range, array is empty!');
        expect(() => name.last()).toThrowError('Index out of range, array is empty!');
    });
});
