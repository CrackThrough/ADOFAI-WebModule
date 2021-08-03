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
                        val = val.split('').map((v) => v + v).join('');
                    }
                    const _r = parseInt(val.substr(0, 2), 16);
                    const _g = parseInt(val.substr(2, 2), 16);
                    const _b = parseInt(val.substr(4, 2), 16);
                    const _a = parseInt(val.substr(6, 2), 16);
                    this.R = isNaN(_r) ? 255 : _r;
                    this.G = isNaN(_g) ? 255 : _g;
                    this.B = isNaN(_b) ? 255 : _b;
                    this.A = isNaN(_a) ? 255 : _a;
                } else if ([1, 2].includes(val.length)) {
                    let _c = parseInt(val, 16);
                    _c = isNaN(_c) ? 255 : _c;
                    this.R = _c;
                    this.G = _c;
                    this.B = _c;
                    this.A = 255;
                }
                break;
            case "number":
                val = Math.abs(val);
                let _c;
                if (val >= 2 ** 24 && val < 2 ** 32) { // includes alpha value
                    _c = val.toString(16).padStart(8, '0');
                } else if (val >= 0 && val < 2 ** 24) {
                    _c = val.toString(16).padStart(6, '0');
                } else {
                    break;
                }
                const _r = parseInt(_c.substr(0, 2), 16);
                const _g = parseInt(_c.substr(2, 2), 16);
                const _b = parseInt(_c.substr(4, 2), 16);
                const _a = parseInt(_c.substr(6, 2), 16);
                this.R = isNaN(_r) ? 255 : _r;
                this.G = isNaN(_g) ? 255 : _g;
                this.B = isNaN(_b) ? 255 : _b;
                this.A = isNaN(_a) ? 255 : _a;
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
