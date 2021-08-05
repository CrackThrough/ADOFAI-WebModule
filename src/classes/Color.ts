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
    static fromHSV(hue: number, saturation: number, value: number): Color {
        hue = this.clamp(hue, 0, 360);
        saturation = this.clamp(saturation, 0, 1);
        value = this.clamp(value, 0, 1);

        const c = value * saturation;
        const x = c * (1 - Math.abs(((hue / 60) % 2) - 1));
        const m = value - c;
        const colorData = {
            r: 0,
            g: 0,
            b: 0,
        };

        switch (true) {
            case this.inRangeOf(hue, 0, 60):
                colorData.r = c;
                colorData.g = x;
                break;
            case this.inRangeOf(hue, 60, 120):
                colorData.r = x;
                colorData.g = c;
                break;
            case this.inRangeOf(hue, 120, 180):
                colorData.g = c;
                colorData.b = x;
                break;
            case this.inRangeOf(hue, 180, 240):
                colorData.g = x;
                colorData.b = c;
                break;
            case this.inRangeOf(hue, 240, 300):
                colorData.r = x;
                colorData.b = c;
                break;
            case this.inRangeOf(hue, 300, 360):
                colorData.r = c;
                colorData.b = x;
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
            this.parseAndClamp(_c.substr(0, 2)),
            this.parseAndClamp(_c.substr(2, 2)),
            this.parseAndClamp(_c.substr(4, 2)),
            this.parseAndClamp(_c.substr(6, 2))
        );

        return color;
    }

    /**
     * Convert color from string.
     * @param str string to convert into color (ex: '#FFFFFF', 'F00', 'FF')
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

            color.r = this.parseAndClamp(str.substr(0, 2));
            color.g = this.parseAndClamp(str.substr(2, 2));
            color.b = this.parseAndClamp(str.substr(4, 2));
            color.a = this.parseAndClamp(str.substr(6, 2));
        } else if ([1, 2].includes(str.length)) {
            const _c = this.parseAndClamp(str);
            color.r = _c;
            color.g = _c;
            color.b = _c;
            color.a = 255;
        }
        return color;
    }

    /**
     * Convert color from object.
     * @param obj object to convert into color
     */
    static fromObject(obj: any): Color {
        let r = new Color();
        for (let k in obj ?? {}) {
            // @ts-ignore
            r[k] = obj[k];
        }
        return r;
    }

    private static clamp(v: number, min: number, max: number): number {
        return Math.max(min, Math.min(v, max));
    }

    private static clampAndPad(v: number): string {
        return this.clamp(Math.floor(v), 0, 255).toString(16).padStart(2, "0");
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
