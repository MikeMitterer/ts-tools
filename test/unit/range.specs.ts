import 'jest-extended';
import { loop, range } from '../../src/main/range';

describe('range', () => {
    // const logger = LoggerFactory.getLogger('test.range');

    // beforeEach(() => {
    // });
    //
    // afterEach(() => {
    // });

    test('test number of elements', /* async */ () => {
        expect(range(0, 10).length).toBe(11);
    });

    test('Number of iterations', () => {
        let iterations = 0;
        range(0, 10).forEach(() => iterations++);

        expect(iterations).toBe(11);
    });

    test('loop', () => {
        let iterations = 0;
        loop(0, 10).through(() => {
            iterations++;
        });

        expect(iterations).toBe(11);
    });

    test('loop with values', () => {
        let iterations = 0;
        let sum = 0;
        loop(1, 3).through((value: number) => {
            sum += value;
            iterations++;
        });

        expect(iterations).toBe(3);
        expect(sum).toBe(6);

        iterations = 0;
        sum = 0;
        loop(3, 1).through((value: number) => {
            sum += value;
            iterations++;
        });
        expect(iterations).toBe(3);
        expect(sum).toBe(6);
    });

    test('inverse loop', () => {
        let iterations = 0;
        loop(10, 0).through(() => {
            iterations++;
        });

        expect(iterations).toBe(11);
    });

    test('negative loop', () => {
        let iterations = 0;
        let sum = 0;
        loop(-3, 0).through((value) => {
            sum += value;
            iterations++;
        });

        expect(iterations).toBe(4);
        expect(sum).toBe(-6);
    });
});
