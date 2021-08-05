/**
 * Customizable color and utilities.
 */
export class Color {
    /**
     * Redness of current color.
     */
    R: number = 255;

    /**
     * Greenness of current color.
     */
    G: number = 255;

    /**
     * Blueness of current color.
     */
    B: number = 255;

    /**
     * Opacity of current color.
     */
    A: number = 255;

    /**
     * Create instance of a `Color` from RGB values.
     * @param R Redness of the color
     * @param G Greenness of the color
     * @param B Blueness of the color
     * @param A Opacity of the color
     */
    constructor(R = 255, G = 255, B = 255, A = 255) {
        this.R = R ?? 255;
        this.G = G ?? 255;
        this.B = B ?? 255;
        this.A = A ?? 255;
    }

    /**
     * Converts this color to string.
     * @returns {string} a converted HEX string. DOES NOT INCLUDE #
     */
    toString(): string {
        let result =
            Color._ClampAndPad(this.R) +
            Color._ClampAndPad(this.G) +
            Color._ClampAndPad(this.B);
        if (this.A < 255) result += Color._ClampAndPad(this.A);

        return result;
    }

    /**
     * Converts this color to number.
     * @returns {number} a converted value
     */
    toNumber(): number {
        return parseInt(this.toString(), 16);
    }

    /**
     * Convert color from HSV Data.
     * @param hue Hue (0.0 ~ 360.0)
     * @param saturation Saturation (0.0 ~ 1.0)
     * @param value Value (0.0 ~ 1.0)
     * @returns {Color}
     */
    static FromHSV(hue: number, saturation: number, value: number): Color {
        hue = hue ?? 0;
        saturation = saturation ?? 0;
        value = value ?? 0;

        if (
            !this._InRangeOf(hue, 0, 360) ||
            !this._InRangeOf(saturation, 0, 1) ||
            !this._InRangeOf(value, 0, 1)
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
            case this._InRangeOf(hue, 0, 60):
                colorData.R = c;
                colorData.G = x;
                break;
            case this._InRangeOf(hue, 60, 120):
                colorData.R = x;
                colorData.G = c;
                break;
            case this._InRangeOf(hue, 120, 180):
                colorData.G = c;
                colorData.B = x;
                break;
            case this._InRangeOf(hue, 180, 240):
                colorData.G = x;
                colorData.B = c;
                break;
            case this._InRangeOf(hue, 240, 300):
                colorData.R = x;
                colorData.B = c;
                break;
            case this._InRangeOf(hue, 300, 360):
                colorData.R = c;
                colorData.B = x;
                break;
        }

        for (let k in colorData) {
            // @ts-ignore
            colorData[k] = (colorData[k] + m) * 255;
        }
        return Color.FromObject(colorData);
    }

    /**
     * Convert color from number.
     * @param num number to convert into color
     * @returns {Color}
     */
    static FromNumber(num: number): Color {
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

        const color = new Color(
            this._ParseAndClamp(_c.substr(0, 2)),
            this._ParseAndClamp(_c.substr(2, 2)),
            this._ParseAndClamp(_c.substr(4, 2)),
            this._ParseAndClamp(_c.substr(6, 2))
        );

        return color;

        // color.R = this._ParseAndClamp(_c.substr(0, 2));
        // color.G = this._ParseAndClamp(_c.substr(2, 2));
        // color.B = this._ParseAndClamp(_c.substr(4, 2));
        // color.A = this._ParseAndClamp(_c.substr(6, 2));
    }

    /**
     * Convert color from string.
     * @param str string to convert into color (ex: '#FFFFFF', 'F00', 'FF')
     * @returns {Color}
     */
    static FromString(str: string): Color {
        const color = new Color();

        str = str?.replace("#", "") ?? "";

        if ([3, 4, 6, 8].includes(str.length)) {
            if (str.length === 3 || str.length === 4) {
                str = str
                    .split("")
                    .map((v) => v + v)
                    .join("");
            }

            color.R = this._ParseAndClamp(str.substr(0, 2));
            color.G = this._ParseAndClamp(str.substr(2, 2));
            color.B = this._ParseAndClamp(str.substr(4, 2));
            color.A = this._ParseAndClamp(str.substr(6, 2));
        } else if ([1, 2].includes(str.length)) {
            const _c = this._ParseAndClamp(str);
            color.R = _c;
            color.G = _c;
            color.B = _c;
            color.A = 255;
        } else {
            throw new Error("Invalid parameter");
        }
        return color;
    }

    /**
     * Convert color from object.
     * @param obj object to convert into color
     * @returns {Color}
     */
    static FromObject(obj: any): Color {
        let r = new Color();
        for (let k in obj ?? {}) {
            // @ts-ignore
            r[k] = obj[k];
        }
        return r;
    }

    private static _ClampAndPad(val: number): string {
        return Math.max(0, Math.min(Math.floor(val), 255))
            .toString(16)
            .padStart(2, "0");
    }

    private static _InRangeOf(v: number, min: number, max: number): boolean {
        return min <= v && v <= max;
    }

    private static _ParseAndClamp(v: string): number {
        let x = parseInt(v, 16);
        x = isNaN(x) ? 255 : Math.max(0, Math.min(x, 255));
        return x;
    }
}

export default Color;
