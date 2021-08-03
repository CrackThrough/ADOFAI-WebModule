/**
 * Customizable color and utilities.
 */
class Color {
    /**
     * Redness of current color.
     * @type {number}
     */
    R = 255;

    /**
     * Greenness of current color.
     * @type {number}
     */
    G = 255;

    /**
     * Blueness of current color.
     * @type {number}
     */
    B = 255;

    /**
     * Opacity of current color.
     * @type {number}
     */
    A = 255;

    /**
     * Creates color from RGB values.
     * @param {number} R Redness of the color
     * @param {number} G Greenness of the color
     * @param {number} B Blueness of the color
     * @param {number} A Opacity of the color
     */
    constructor(R, G, B, A) {
        this.R = R ?? 255;
        this.G = G ?? 255;
        this.B = B ?? 255;
        this.A = A ?? 255;
    }

    /**
     * Converts this color to string.
     * @returns {string} a converted HEX string. DOES NOT INCLUDE #
     */
    toString() {
        function clampAndPad(val) {
            Math.max(0, Math.min(Math.floor(val), 255))
                .toString(16)
                .padStart(2, "0");
        }

        let result =
            clampAndPad(this.R) + clampAndPad(this.G) + clampAndPad(this.B);
        if (this.A < 255) result += clampAndPad(this.A);

        return result;
    }

    /**
     * Converts this color to number.
     * @returns {number} a converted value
     */
    toNumber() {
        return parseInt(this.toString(), 16);
    }

    /**
     * Convert color from HSV Data.
     * @param {number} hue Hue (0.0 ~ 360.0)
     * @param {number} saturation Saturation (0.0 ~ 1.0)
     * @param {number} value Value (0.0 ~ 1.0)
     * @returns {Color}
     */
    static FromHSV(hue, saturation, value) {
        function inRangeOf(v, min, max) {
            return min <= v && v <= max;
        }

        hue = hue ?? 0;
        saturation = saturation ?? 0;
        value = value ?? 0;

        if (
            !inRangeOf(hue, 0, 360) ||
            !inRangeOf(saturation, 0, 1) ||
            !inRangeOf(value, 0, 1)
        )
            throw new Error("Parameter out of range");

        const c = value * saturation;
        const x = c * (1 - Math.abs(((hue / 60) % 2) - 1));
        const m = value - c;
        const colorData = {
            R: 0,
            G: 0,
            B: 0,
        };

        switch (true) {
            case inRangeOf(hue, 0, 60):
                colorData.R = c;
                colorData.G = x;
                break;
            case inRangeOf(hue, 60, 120):
                colorData.R = x;
                colorData.G = c;
                break;
            case inRangeOf(hue, 120, 180):
                colorData.G = c;
                colorData.B = x;
                break;
            case inRangeOf(hue, 180, 240):
                colorData.G = x;
                colorData.B = c;
                break;
            case inRangeOf(hue, 240, 300):
                colorData.R = x;
                colorData.B = c;
                break;
            case inRangeOf(hue, 300, 360):
                colorData.R = c;
                colorData.B = x;
                break;
        }

        for (let k in colorData) {
            colorData[k] = (colorData[k] + m) * 255;
        }
        return Color.FromObject(colorData);
    }

    /**
     * Convert color from number.
     * @param {number} num number to convert into color
     * @returns {Color}
     */
    static FromNumber(num) {
        function parseAndClamp(v) {
            let x = parseInt(v, 16);
            x = isNaN(x) ? 255 : Math.max(0, Math.min(x, 255));
        }

        num = Math.abs(num ?? 0);
        let _c;
        if (num >= 2 ** 24 && num < 2 ** 32) {
            // includes alpha value
            _c = num.toString(16).padStart(8, "0");
        } else if (num >= 0 && num < 2 ** 24) {
            _c = num.toString(16).padStart(6, "0");
        } else {
            throw new Error("Parameter out of range");
        }

        this.R = parseAndClamp(_c.substr(0, 2));
        this.G = parseAndClamp(_c.substr(2, 2));
        this.B = parseAndClamp(_c.substr(4, 2));
        this.A = parseAndClamp(_c.substr(6, 2));
    }

    /**
     * Convert color from string.
     * @param {string} str string to convert into color (ex: '#FFFFFF', 'F00', 'FF')
     * @returns {Color}
     */
    static FromString(str) {
        function parseAndClamp(v) {
            let x = parseInt(v, 16);
            x = isNaN(x) ? 255 : Math.max(0, Math.min(x, 255));
        }

        str = str?.replace("#", "") ?? "";

        if ([3, 4, 6, 8].includes(str.length)) {
            if (str.length === 3 || str.length === 4) {
                str = str
                    .split("")
                    .map((v) => v + v)
                    .join("");
            }

            this.R = parseAndClamp(str.substr(0, 2));
            this.G = parseAndClamp(str.substr(2, 2));
            this.B = parseAndClamp(str.substr(4, 2));
            this.A = parseAndClamp(str.substr(6, 2));
        } else if ([1, 2].includes(str.length)) {
            const _c = parseAndClamp(str);
            this.R = _c;
            this.G = _c;
            this.B = _c;
            this.A = 255;
        } else {
            throw new Error("Invalid parameter");
        }
    }

    /**
     * Convert color from object.
     * @param {object} obj object to convert into color
     * @returns {Color}
     */
    static FromObject(obj) {
        let r = new Color();
        for (let k in obj ?? {}) {
            r[k] = obj[k];
        }
        return r;
    }
}

export default Color;
