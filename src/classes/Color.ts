/**
 * Customizable color and utilities.
 */
export class Color {
    /**
     * Redness of current color.
     */
    r: number = 255;

    /**
     * Greenness of current color.
     */
    g: number = 255;

    /**
     * Blueness of current color.
     */
    b: number = 255;

    /**
     * Opacity of current color.
     */
    a: number = 255;

    /**
     * Converts this color to string.
     * @returns the converted HEX string. DOES NOT INCLUDE #
     */
    toString(): string {
        let result =
            Color.clampAndPad(this.r) +
            Color.clampAndPad(this.g) +
            Color.clampAndPad(this.b);
        if (this.a < 255) result += Color.clampAndPad(this.a);

        return result;
    }

    /**
     * Converts this color to number.
     */
    toNumber(): number {
        return parseInt(this.toString(), 16);
    }

    /**
     * Create instance of a `Color` from RGB values.
     * @param r Redness of the color
     * @param g Greenness of the color
     * @param b Blueness of the color
     * @param a Opacity of the color
     */
    constructor(r = 255, g = 255, b = 255, a = 255) {
        this.r = r ?? 255;
        this.g = g ?? 255;
        this.b = b ?? 255;
        this.a = a ?? 255;
    }

    /**
     * Convert color from HSV Data.
     * @param hue Hue (0.0 ~ 360.0)
     * @param saturation Saturation (0.0 ~ 1.0)
     * @param value Value (0.0 ~ 1.0)
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
        return Color.fromObject(colorData);
    }

    /**
     * Convert color from number.
     * @param num number to convert into color
     * @returns {Color}
     */
    static fromNumber(num: number): Color {
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
    static fromString(str: string): Color {
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
    static fromObject(obj: any): Color {
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

    private static inRangeOf(v: number, min: number, max: number): boolean {
        return min <= v && v <= max;
    }

    private static parseAndClamp(v: string): number {
        let x = parseInt(v, 16);
        x = isNaN(x) ? 255 : this.clamp(x, 0, 255);
        return x;
    }
}

export default Color;
