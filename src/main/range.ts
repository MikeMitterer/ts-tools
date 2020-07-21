/**
 * Return-Type of [loop] function
 */
type Looper = { through: (callback: (value: number) => void) => void };

/**
 * Generates Array with end - start number of elements
 *
 * More:
 *      https://dev.to/ycmjason/how-to-create-range-in-javascript-539i
 *
 * @param start
 * @param end
 */
export function range(start: number, end: number): number[] {
    const nrOfElements = Math.abs(end - start) + 1;
    const invert = start > end;

    return Array.from({ length: nrOfElements }, (_, i) => {
        return start + (invert ? i * -1 : i);
    });
}

/**
 * Loops through range of numbers
 *
 * @param start
 * @param end
 */
export function loop(start: number, end: number): Looper {
    return {
        through: (callback: (value: number) => void): void => {
            range(start, end).forEach((value) => callback(value));
        },
    };
}
