import { Operator } from "../types"

/**
 * Customizable color and utilities.
 */
export class Color {
    //#region Convert Color Methods
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
    //#endregion

    //#region Color Operations
    /**
     * Operate the properties by another instance.
     * @param operator operator to decide which operation to do
     * @param color other color instance
     */
    operateColor(operator: Operator, color: Color): this {
        Color.operate(operator, this, color, this);
        return this;
    }

    /**
     * Operate the properties by RGBA values.
     * @param operator operator to decide which operation to do
     * @param r red value
     * @param g green value
     * @param b blue value
     * @param a alpha value
     */
    operateValue(operator: Operator, r: number, g: number, b: number, a = 0): this {
        Color.operate(operator, this, { r, g, b, a }, this);
        return this;
    }
    //#endregion

    /**
     * Create instance of a `Color` from RGB values. (No parameter given means white color!)
     * @param r Redness of the color
     * @param g Greenness of the color
     * @param b Blueness of the color
     * @param a Opacity of the color
     */
    constructor(public r = 255, public g = 255, public b = 255, public a = 255) {}

    //#region Static Readonly Colors
    /**
     * Color: `#000000FF`.
     */
    static readonly black = Color.fromString("000000");

    /**
     * Color: `#0000FFFF`.
     */
    static readonly blue = Color.fromString("0000FF");
    
    /**
     * Color: `#00000000`.
     */
    static readonly clear = Color.fromString("00000000");
    
    /**
     * Color: `#00FFFFFF`.
     */
    static readonly cyan = Color.fromString("00FFFF");
    
    /**
     * Color: `#808080FF`.
     */
    static readonly gray = Color.fromString("808080");
    
    /**
     * Color: `#00FF00FF`.
     */
    static readonly green = Color.fromString("00FF00");
    
    /**
     * Color: `#808080FF`.
     */
    static readonly grey = Color.gray;
    
    /**
     * Color: `#FF00FFFF`.
     */
    static readonly magenta = Color.fromString("FF00FF");
    
    /**
     * Color: `#FF0000FF`.
     */
    static readonly red = Color.fromString("FF0000");
    
    /**
     * Color: `#FFFFFFFF`.
     */
    static readonly white = new Color();
    
    /**
     * Color: `#FFEB04FF`.
     */
    static readonly yellow = Color.fromString("FFEB04");
    //#endregion

    //#region Static Convert Color Methods
    /**
     * Convert color from HSV Data.
     * @param hue hue (0.0 ~ 360.0)
     * @param saturation saturation (0.0 ~ 1.0)
     * @param value value (0.0 ~ 1.0)
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
    //#endregion

    //#region Static Color Operations
    /**
     * 
     * @param operator operator to decide which operation to do
     * @param color1 color instance to get operated
     * @param color2 color instance to operate
     * @returns new instance without editing other instances
     */
    static operateColor(operator: Operator, color1: Color, color2: Color): Color {
        return this.operate(operator, color1, color2);
    }

    /**
     * 
     * @param operator operator to decide which operation to do
     * @param color color instance to get operated
     * @param r red value
     * @param g green value
     * @param b blue value
     * @param a alpha value
     * @returns new instance without editing other instances
     */
    static operateValue(operator: Operator, color: Color, r: number, g: number, b: number, a = 0): Color {
        return this.operate(operator, color, { r, g, b, a });
    }
    //#endregion

    //#region Private Utility Shorthands
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

    private static operate(
        operator: Operator,
        c1: Color,
        c2: Color | { r: number, g: number, b: number, a: number },
        result = Color.white
    ): Color {
        for (let k in c1) {
            // @ts-ignore Hacky way to allow multiple calculations in short code
            result[k] = this.clamp(new Function("return " + c1[k] + operator + c2[k])(), 0, 255);
        }

        return result;
    }
    //#endregion
}

export default Color;
