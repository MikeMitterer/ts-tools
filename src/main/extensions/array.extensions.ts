// Damit wird das File zu einem "Modul"
export {};

declare global {
    interface Array<T> {
        first(): T;

        last(): T;
    }
}

if (!Array.prototype.first) {
    Array.prototype.first = function <T>(): T {
        if (this.length === 0) {
            throw new Error('Index out of range, array is empty!');
        }
        return this[0];
    };
}

if (!Array.prototype.last) {
    Array.prototype.last = function <T>(): T {
        if (this.length === 0) {
            throw new Error('Index out of range, array is empty!');
        }
        return this[this.length - 1];
    };
}
