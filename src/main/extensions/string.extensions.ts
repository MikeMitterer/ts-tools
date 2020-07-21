// Damit wird das File zu einem "Modul"
export {};

declare global {
    interface String {
        center(maxLength: number, fillString?: string): string;
    }
}

if (!String.prototype.center) {
    String.prototype.center = function (maxLength: number, fillString?: string): string {
        fillString = fillString || ' '; // If fillString is undefined, use space as default
        return this.length >= maxLength
            ? this.toString()
            : this.padStart((this.length + maxLength) / 2, fillString).padEnd(
                  maxLength,
                  fillString,
              );
    };
}
