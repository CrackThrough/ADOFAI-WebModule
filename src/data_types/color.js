/**
 * Class for managing customizable hexadecimal color.
 */
class Color {
    /**
     * R is an integer between 0 ~ 255 deciding capacity of Red in the color.
     *
     * You can use `color.R = 0;` to set its color.
     */
    R = 255;

    /**
     * G is an integer between 0 ~ 255 deciding capacity of Green in the color.
     *
     * You can use `color.G = 0;` to set its color.
     */
    G = 255;

    /**
     * B is an integer between 0 ~ 255 deciding capacity of Blue in the color.
     *
     * You can use `color.B = 0;` to set its color.
     */
    B = 255;

    /**
     * A is an integer between 0 ~ 255 deciding opacity of the color.
     *
     * You can use 'color.A = 0;' to set its opacity.
     */

    A = 255;

    /**
     * Create a color using constructor.
     * @param {String | Number} val Original hexadecimal string or number to set color. ex) 'ff0000', 0xabcdef, 567890.
     */
    constructor(val) {
        switch (typeof val) {
            case "string":
                val = val.replace("#", "");

                if ([3, 4, 6, 8].includes(val.length)) {
                    if (val.length === 3 || val.length === 4) {
                        val = val.split('').map((v) => v + v).join('')
                    }
                    this.R = parseInt(val.substr(0, 2), 16) || 255;
                    this.G = parseInt(val.substr(2, 2), 16) || 255;
                    this.B = parseInt(val.substr(4, 2), 16) || 255;
                    this.A = parseInt(val.substr(6, 2), 16) || 255;
                } else if ([1, 2].includes(val.length)) {
                    let c = parseInt(val, 16) || 255;
                    this.R = c;
                    this.G = c;
                    this.B = c;
                    this.A = 255;
                }
                break;
            case "number":
                val = Math.abs(val);
                let c;
                if (val >= 2 ** 24 && val < 2 ** 32) { // includes alpha value
                    c = val.toString(16).padStart(8, '0');
                } else if (val >= 0 && val < 2 ** 24) {
                    c = val.toString(16).padStart(6, '0');
                } else {
                    break;
                }
                this.R = parseInt(c.substr(0, 2), 16) || 255;
                this.G = parseInt(c.substr(2, 2), 16) || 255;
                this.B = parseInt(c.substr(4, 2), 16) || 255;
                this.A = parseInt(c.substr(6, 2), 16) || 255;
                break;
        }
    }

    /**
     * Returns a value converted to HEX string. DOES NOT INCLUDE #.
     */
    toString() {
        let arr = Object.keys(this).filter((x) => x.length === 1);
        for (let i = 0; i < 4; i++) {
            if (this[arr[i]] < 0) this[arr[i]] = 0;
            if (this[arr[i]] > 255) this[arr[i]] = 255;
        }
        let _r = Math.floor(this.R).toString(16).padStart(2, '0');
        let _g = Math.floor(this.G).toString(16).padStart(2, '0');
        let _b = Math.floor(this.B).toString(16).padStart(2, '0');
        let _a = this.A !== 255 ? Math.floor(this.A).toString(16).padStart(2, '0') : "";
        return `${_r}${_g}${_b}${_a}`;
    }

    // noinspection JSUnusedGlobalSymbols
    /**
     * Returns a value converted to a number.
     * @returns {number} a converted value
     */
    toNumber() {
        return parseInt(this.toString(), 16);
    }
}

export default Color;
